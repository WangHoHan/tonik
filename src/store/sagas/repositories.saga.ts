import {all, call, CallEffect, put, PutEffect, takeEvery} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import axios from 'axios';
import {actionTypes as loadingActionTypes} from '../data/loading/actions';
import {actionTypes as repositoriesActionTypes} from '../data/repositories/actions';
import {GITHUB_SEARCH_REPOSITORIES_URL} from '../../constants/endpoints';
import {LATEST_REPOSITORIES_REQUEST} from '../../constants/localStorageKeys';
import {RepositoriesQueryParams} from '../../intrafaces/RepositoriesQueryParams';
import {createRepositoriesSearchQuery, getRepositoriesQueryParamsFromUrl} from '../../utils/githubQueries';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';
import {readFromCache, removeFromCache, writeToCache} from '../../utils/cache';

const fetchRepositories = (options: { url: string }): Promise<any> => {
    return axios.request({
        method: 'GET',
        url: options.url
    });
};

export function* repositoriesWatcher(): any {
    yield all([
        yield takeEvery(repositoriesActionTypes.INIT_REPOSITORIES, initRepositoriesWorker),
        yield takeEvery(repositoriesActionTypes.GET_REPOSITORIES, repositoriesWorker)
    ]);
}

function* initRepositoriesWorker(props: AnyAction): Generator<CallEffect | PutEffect<{ type: string, payload: any }>, void, any> {
    let isCached: boolean = false;
    const latestUrl: string | null = readFromCache(LATEST_REPOSITORIES_REQUEST);
    if (latestUrl) {
        const repositoriesCache: string | null = readFromCache(latestUrl);
        if (repositoriesCache) {
            try {
                const elements: RepositoriesInformation[] = JSON.parse(repositoriesCache);
                yield put({
                    type: repositoriesActionTypes.SET_REPOSITORIES,
                    payload: elements
                });
                const repositoriesQueryParams: RepositoriesQueryParams = getRepositoriesQueryParamsFromUrl(latestUrl);
                yield put({
                    type: repositoriesActionTypes.SET_REPOSITORIES_QUERY_PARAMS,
                    payload: repositoriesQueryParams
                });
                isCached = true;
            } catch (error: any) {
                removeFromCache(LATEST_REPOSITORIES_REQUEST);
                removeFromCache(latestUrl);
                isCached = false;
            }
        }
    }
    if (!isCached) {
        //TODO sample fetch
    }
}

function* repositoriesWorker(props: AnyAction): Generator<CallEffect | PutEffect<{ type: string, payload: any }>, void, any> {
    const repositoriesQueryParams: RepositoriesQueryParams = props.payload;
    const query: string = createRepositoriesSearchQuery(repositoriesQueryParams);
    if (query) {
        let isCached: boolean = false;
        const url: string = GITHUB_SEARCH_REPOSITORIES_URL + query;
        const repositoriesCache: string | null = readFromCache(url);
        if (repositoriesCache) {
            try {
                const elements: RepositoriesInformation[] = JSON.parse(repositoriesCache);
                yield put({
                    type: repositoriesActionTypes.SET_REPOSITORIES,
                    payload: elements
                });
                writeToCache(LATEST_REPOSITORIES_REQUEST, url);
                isCached = true;
            } catch (error: any) {
                removeFromCache(url);
                isCached = false;
            }
        }
        if (!isCached) {
            yield put({
                type: loadingActionTypes.SET_IS_LOADING,
                payload: true
            });
            try {
                const response: any = yield call(fetchRepositories, {url});
                const repositories: [] = response.data.items;
                const elements: RepositoriesInformation[] = repositories.map((repositoriesDataItem: any) => {
                    const element: RepositoriesInformation = {
                        name: repositoriesDataItem.full_name,
                        owner: repositoriesDataItem.owner.login,
                        stars: repositoriesDataItem.stargazers_count,
                        createdAt: repositoriesDataItem.created_at.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/)[0]
                    }
                    return element;
                });
                yield put({
                    type: repositoriesActionTypes.SET_REPOSITORIES,
                    payload: elements
                });
                writeToCache(url, JSON.stringify(elements));
                writeToCache(LATEST_REPOSITORIES_REQUEST, url);
                yield put({
                    type: loadingActionTypes.SET_IS_LOADING,
                    payload: false
                });
            } catch (error: any) {
                yield put({
                    type: repositoriesActionTypes.GET_REPOSITORIES_FAIL,
                    payload: error.message
                });
                yield put({
                    type: loadingActionTypes.SET_IS_LOADING,
                    payload: false
                });
            }
        }
    }
}

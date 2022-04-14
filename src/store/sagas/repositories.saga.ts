import {call, CallEffect, ForkEffect, put, PutEffect, takeEvery} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import axios from 'axios';
import {actionTypes} from '../data/repositories/actions';
import {GITHUB_SEARCH_REPOSITORIES_URL} from '../../constants/endpoints';
import {RepositoriesQueryParams} from '../../intrafaces/RepositoriesQueryParams';
import {createRepositoriesSearchQuery} from '../../utils/githubQueryCreator';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';
import {readFromCache, writeToCache} from '../../utils/cache';

function fetchRepositories(options: { url: string }): Promise<any> {
    return axios.request({
        method: 'GET',
        url: options.url
    });
}

export function* repositoriesWatcher(): Generator<ForkEffect<never>, void> {
    yield takeEvery(actionTypes.GET_REPOSITORIES, repositoriesWorker);
}

function* repositoriesWorker(payload: AnyAction): Generator<CallEffect<any> | PutEffect<{ type: string, payload: any }>, void, any> {
    const repositoriesQueryParams: RepositoriesQueryParams = payload.payload;
    const query: string = createRepositoriesSearchQuery(repositoriesQueryParams);
    if (query) {
        const url: string = GITHUB_SEARCH_REPOSITORIES_URL + query;
        const repositoriesCache: string | null = readFromCache(url);
        if (repositoriesCache) {
            const elements: RepositoriesInformation[] = JSON.parse(repositoriesCache);
            yield put({
                type: actionTypes.SET_REPOSITORIES,
                payload: elements
            });
        } else {
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
                    type: actionTypes.SET_REPOSITORIES,
                    payload: elements
                });
                writeToCache(url, elements);
            } catch (error: any) {
                yield put({
                    type: actionTypes.GET_REPOSITORIES_FAIL,
                    payload: error.message
                });
            }
        }
    }
}
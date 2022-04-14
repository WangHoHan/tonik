import {call, CallEffect, ForkEffect, put, PutEffect, takeEvery} from 'redux-saga/effects';
import {AnyAction} from 'redux';
import axios from 'axios';
import {actionTypes} from '../data/repositories/actions';
import {GITHUB_SEARCH_REPOSITORIES_URL} from '../../constants/endpoints';
import {RepositoriesQueryParams} from '../../intrafaces/RepositoriesQueryParams';
import {createRepositoriesSearchQuery} from '../../utils/githubQueryCreator';
import {RepositoriesInformation} from '../../intrafaces/RepositoriesInformation';

function fetchRepositories(options: { query: string }): Promise<any> {
    return axios.request({
        method: 'GET',
        url: GITHUB_SEARCH_REPOSITORIES_URL + options.query
    });
}

export function* repositoriesWatcher(): Generator<ForkEffect<never>, void> {
    yield takeEvery(actionTypes.FETCH_REPOSITORIES_REQUEST, repositoriesWorker);
}

function* repositoriesWorker(payload: AnyAction): Generator<CallEffect<any> | PutEffect<{type: string, payload: any}>, void, any> {
    const repositoriesQueryParams: RepositoriesQueryParams = payload.payload;
    const query: string = createRepositoriesSearchQuery(repositoriesQueryParams);
    if (query) {
        try {
            const response: any = yield call(fetchRepositories, {query});
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
                type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
                payload: elements
            });
        } catch (error: any) {
            yield put({
                type: actionTypes.FETCH_REPOSITORIES_FAIL,
                payload: error.message
            });
        }
    }
}
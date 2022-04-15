import {FEATURE_REPOSITORIES_NAME} from '../../constants';
import {RepositoriesQueryParams} from '../../../intrafaces/RepositoriesQueryParams';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';

export const actionTypes: { SET_Q_PARAM: string, SET_PAGE_PARAM: string, GET_REPOSITORIES: string, SET_REPOSITORIES: string, GET_REPOSITORIES_FAIL: string } = {
    SET_Q_PARAM: `[${FEATURE_REPOSITORIES_NAME}] set q param`,
    SET_PAGE_PARAM: `[${FEATURE_REPOSITORIES_NAME}] set p param`,
    GET_REPOSITORIES: `[${FEATURE_REPOSITORIES_NAME}] get repositories`,
    SET_REPOSITORIES: `[${FEATURE_REPOSITORIES_NAME}] set repositories`,
    GET_REPOSITORIES_FAIL: `[${FEATURE_REPOSITORIES_NAME}] get repositories fail`
};

export const setQParam = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.SET_Q_PARAM,
    payload
});

export const setPageParam = (payload: number): { payload: number, type: string } => ({
    type: actionTypes.SET_PAGE_PARAM,
    payload
});

export const getRepositories = (payload: RepositoriesQueryParams): { payload: RepositoriesQueryParams, type: string } => ({
    type: actionTypes.GET_REPOSITORIES,
    payload
});

export const setRepositories = (payload: RepositoriesInformation[]): { payload: RepositoriesInformation[], type: string } => ({
    type: actionTypes.SET_REPOSITORIES,
    payload
});

export const getRepositoriesFail = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.GET_REPOSITORIES_FAIL,
    payload
});

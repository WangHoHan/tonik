import {FEATURE_REPOSITORIES_NAME} from '../../constants';
import {RepositoriesQueryParams} from '../../../intrafaces/RepositoriesQueryParams';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';

export const actionTypes: { SET_TOTAL_COUNT: string, SET_REPOSITORIES_QUERY_PARAMS: string, SET_Q_PARAM: string, SET_SORT_PARAM: string, SET_ORDER_PARAM: string, SET_PAGE_PARAM: string, INIT_REPOSITORIES: string, GET_REPOSITORIES: string, SET_REPOSITORIES: string, GET_REPOSITORIES_FAIL: string } = {
    SET_TOTAL_COUNT: `[${FEATURE_REPOSITORIES_NAME}] set total count`,
    SET_REPOSITORIES_QUERY_PARAMS: `[${FEATURE_REPOSITORIES_NAME}] set repositories query params`,
    SET_Q_PARAM: `[${FEATURE_REPOSITORIES_NAME}] set q param`,
    SET_SORT_PARAM: `[${FEATURE_REPOSITORIES_NAME}] set sort param`,
    SET_ORDER_PARAM: `[${FEATURE_REPOSITORIES_NAME}] set order param`,
    SET_PAGE_PARAM: `[${FEATURE_REPOSITORIES_NAME}] set p param`,
    INIT_REPOSITORIES: `[${FEATURE_REPOSITORIES_NAME}] init repositories`,
    GET_REPOSITORIES: `[${FEATURE_REPOSITORIES_NAME}] get repositories`,
    SET_REPOSITORIES: `[${FEATURE_REPOSITORIES_NAME}] set repositories`,
    GET_REPOSITORIES_FAIL: `[${FEATURE_REPOSITORIES_NAME}] get repositories fail`
};

export const setTotalCount = (payload: number): { payload: number, type: string } => ({
    type: actionTypes.SET_TOTAL_COUNT,
    payload
});

export const setQueryParams = (payload: RepositoriesQueryParams): { payload: RepositoriesQueryParams, type: string } => ({
    type: actionTypes.SET_Q_PARAM,
    payload
});

export const setQParam = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.SET_Q_PARAM,
    payload
});

export const setSortParam = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.SET_SORT_PARAM,
    payload
});

export const setOrderParam = (payload: string): { payload: string, type: string } => ({
   type: actionTypes.SET_ORDER_PARAM,
   payload
});

export const setPageParam = (payload: number): { payload: number, type: string } => ({
    type: actionTypes.SET_PAGE_PARAM,
    payload
});

export const initRepositories = (): { type: string } => ({
    type: actionTypes.INIT_REPOSITORIES,
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

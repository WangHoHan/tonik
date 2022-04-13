import {FEATURE_REPOSITORIES_NAME} from '../../constants';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';

export const actionTypes: { FETCH_REPOSITORIES_REQUEST: string, FETCH_REPOSITORIES_SUCCESS: string, FETCH_REPOSITORIES_FAIL: string } = {
    FETCH_REPOSITORIES_REQUEST: `[${FEATURE_REPOSITORIES_NAME}] fetch repositories request`,
    FETCH_REPOSITORIES_SUCCESS: `[${FEATURE_REPOSITORIES_NAME}] fetch repositories success`,
    FETCH_REPOSITORIES_FAIL: `[${FEATURE_REPOSITORIES_NAME}] fetch repositories fail`
};

export const fetchRepositoriesRequest = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.FETCH_REPOSITORIES_REQUEST,
    payload
});

export const fetchRepositoriesSuccess = (payload: RepositoriesInformation[]): { payload: RepositoriesInformation[], type: string } => ({
    type: actionTypes.FETCH_REPOSITORIES_SUCCESS,
    payload
});

export const fetchRepositoriesFail = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.FETCH_REPOSITORIES_REQUEST,
    payload
});

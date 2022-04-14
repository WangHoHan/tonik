import {FEATURE_LOADING_NAME} from '../../constants';

export const actionTypes: { SET_LOADING: string } = {
    SET_LOADING: `[${FEATURE_LOADING_NAME}] set loading`,
};

export const setLoading = (payload: boolean): { payload: boolean, type: string } => ({
    type: actionTypes.SET_LOADING,
    payload
});

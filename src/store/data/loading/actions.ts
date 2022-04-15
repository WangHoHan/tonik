import {FEATURE_LOADING_NAME} from '../../constants';

export const actionTypes: { SET_IS_LOADING: string } = {
    SET_IS_LOADING: `[${FEATURE_LOADING_NAME}] set is loading`,
};

export const setIsLoading = (payload: boolean): { payload: boolean, type: string } => ({
    type: actionTypes.SET_IS_LOADING,
    payload
});

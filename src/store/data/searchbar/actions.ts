import {FEATURE_SEARCH_BAR_NAME} from '../../constants';

export const actionTypes: { SET_SEARCH_BAR_INPUT: string } = {
    SET_SEARCH_BAR_INPUT: `[${FEATURE_SEARCH_BAR_NAME}] set search bar input`
};

export const setSearchBarInput = (payload: string): { payload: string, type: string } => ({
    type: actionTypes.SET_SEARCH_BAR_INPUT,
    payload
});

import {actionTypes} from './actions';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';
import {RepositoriesQueryParams} from '../../../intrafaces/RepositoriesQueryParams';

const initState: { elements: RepositoriesInformation[], queryParams: RepositoriesQueryParams, error: null } = {
    elements: [],
    queryParams: {
        q: '',
        sort: 'stars',
        order: 'desc',
        perPage: 30,
        page: 1
    },
    error: null
};

const reducer = (state: { elements: RepositoriesInformation[], queryParams: RepositoriesQueryParams, error: null } = initState, action: any): { queryParams: RepositoriesQueryParams, elements: any, error: null } | { queryParams: RepositoriesQueryParams, elements: RepositoriesInformation[], error: any } => {
    switch (action.type) {
        case actionTypes.SET_Q_PARAM:
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    q: action.payload
                }
            };
        case actionTypes.SET_PAGE_PARAM:
            return {
                ...state,
                queryParams: {
                    ...state.queryParams,
                    page: action.payload
                }
            };
        case actionTypes.SET_REPOSITORIES:
            return {
                ...state,
                elements: action.payload,
                error: null
            };
        case actionTypes.GET_REPOSITORIES_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;

import {actionTypes} from './actions';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';
import {RepositoriesQueryParams} from '../../../intrafaces/RepositoriesQueryParams';

const initState: { totalCount: number, queryParams: RepositoriesQueryParams, elements: RepositoriesInformation[], error: null } = {
    totalCount: 0,
    queryParams: {
        q: '',
        sort: 'stars',
        order: 'desc',
        perPage: 30,
        page: 1
    },
    elements: [],
    error: null
};

const reducer = (state: { totalCount: number, queryParams: RepositoriesQueryParams, elements: RepositoriesInformation[], error: null } = initState, action: any): { queryParams: any, elements: RepositoriesInformation[], totalCount: number, error: null } | { queryParams: RepositoriesQueryParams, elements: any, totalCount: number, error: null } | { queryParams: RepositoriesQueryParams, elements: RepositoriesInformation[], totalCount: number, error: any } => {
    switch (action.type) {
        case actionTypes.SET_TOTAL_COUNT:
            return {
              ...state,
              totalCount: action.payload
            };
        case actionTypes.SET_REPOSITORIES_QUERY_PARAMS:
            return {
                ...state,
                queryParams: action.payload
            };
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

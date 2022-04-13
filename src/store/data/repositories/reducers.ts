import {actionTypes} from './actions';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';

const initState: { word: string, elements: RepositoriesInformation[], fetching: boolean, error: null } = {
    word: '',
    elements: [],
    fetching: false,
    error: null
};

const reducer = (state: { word: string, elements: RepositoriesInformation[], fetching: boolean, error: null } = initState, action: any): { elements: RepositoriesInformation[], fetching: boolean, error: null, word: any } | { elements: any, fetching: boolean, error: null, word: string } | { elements: RepositoriesInformation[], fetching: boolean, error: any, word: string } => {
    switch (action.type) {
        case actionTypes.FETCH_REPOSITORIES_REQUEST:
            return {
                ...state,
                fetching: true,
                word: action.payload
            };
        case actionTypes.FETCH_REPOSITORIES_SUCCESS:
            return {
                ...state,
                fetching: false,
                elements: action.payload
            };
        case actionTypes.FETCH_REPOSITORIES_FAIL:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;

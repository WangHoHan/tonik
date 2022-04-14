import {actionTypes} from './actions';
import {RepositoriesInformation} from '../../../intrafaces/RepositoriesInformation';

const initState: { elements: RepositoriesInformation[], error: null } = {
    elements: [],
    error: null
};

const reducer = (state: { elements: RepositoriesInformation[], error: null } = initState, action: any): {elements: RepositoriesInformation[], error: any} => {
    switch (action.type) {
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

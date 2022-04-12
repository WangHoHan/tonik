import {actionTypes} from './actions';

const initState: { input: string } = {
    input: ''
};

const reducer = (state: { input: string } = initState, action: any): { input: string } => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_BAR_INPUT:
            return {
                ...state,
                input: action.payload
            };
        default:
            return state;
    }
};

export default reducer;

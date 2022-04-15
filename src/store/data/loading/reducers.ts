import {actionTypes} from './actions';

const initState: { isLoading: boolean } = {
    isLoading: false
};

const reducer = (state: { isLoading: boolean } = initState, action: any): { isLoading: boolean } => {
    switch (action.type) {
        case actionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default reducer;

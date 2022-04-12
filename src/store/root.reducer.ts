import {CombinedState, combineReducers, Reducer} from 'redux';
import {FEATURE_SEARCH_BAR_NAME} from './constants';
import searchBarReducer from './data/searchbar/reducers';

const reducers: Reducer<CombinedState<{ [p: string]: any }>> = combineReducers({
    [FEATURE_SEARCH_BAR_NAME]: searchBarReducer
});

export default reducers;

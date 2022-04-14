import {CombinedState, combineReducers, Reducer} from 'redux';
import {FEATURE_LOADING_NAME, FEATURE_REPOSITORIES_NAME} from './constants';
import loadingReducer from './data/loading/reducers';
import repositoriesReducer from './data/repositories/reducers';

const reducers: Reducer<CombinedState<{ [x: string]: never; }>, any> = combineReducers({
    [FEATURE_LOADING_NAME]: loadingReducer,
    [FEATURE_REPOSITORIES_NAME]: repositoriesReducer
});

export default reducers;

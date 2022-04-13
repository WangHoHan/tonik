import {CombinedState, combineReducers, Reducer} from 'redux';
import {FEATURE_REPOSITORIES_NAME} from './constants';
import repositoriesReducer from './data/repositories/reducers';

const reducers: Reducer<CombinedState<{ [p: string]: any }>> = combineReducers({
    [FEATURE_REPOSITORIES_NAME]: repositoriesReducer
});

export default reducers;

import {FEATURE_LOADING_NAME} from '../../constants';

const selectLoadingState: any = (state: any) => state[FEATURE_LOADING_NAME];

export const selectIsLoading = (state: any): boolean => selectLoadingState(state).isLoading;

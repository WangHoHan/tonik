import {all, AllEffect, ForkEffect} from 'redux-saga/effects';
import {repositoriesWatcher} from './repositories.saga';

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void>>, void> {
    yield all([
        repositoriesWatcher()
    ]);
};

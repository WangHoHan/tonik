import {all, AllEffect, ForkEffect} from "redux-saga/effects";

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void>>, void> {
    yield all([
    ]);
};
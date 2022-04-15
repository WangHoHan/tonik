import {createStore, applyMiddleware, compose, Store, Middleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import reducers from './root.reducer';
import rootSaga from './sagas/init.sagas';

const saga: SagaMiddleware<object> = createSagaMiddleware();

const middlewares: Middleware[] = [thunk, saga];

export const store: Store = compose(applyMiddleware(...middlewares))(createStore)(reducers);

saga.run(rootSaga);

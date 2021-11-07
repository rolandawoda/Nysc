import {createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

// then run the saga
sagaMiddleware.run(rootSaga)

export default store
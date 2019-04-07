import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware()


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
);


const store = createStore(
    reducer,
    enhancer
)
sagaMiddleware.run(mySaga)

export default store;
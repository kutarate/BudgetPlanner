import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from '../ducks';
import rootSaga from './rootSaga';

const configureStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const rootReducer = combineReducers(reducers);
    const composeEnhancers = composeWithDevTools({});

    const store = {
        ...createStore(
            rootReducer,
            initialState,
            composeEnhancers(applyMiddleware(...middleware))
        )
    };

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;
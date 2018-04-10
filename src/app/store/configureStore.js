import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import { rootReducer } from './rootreducer';

const sagaMiddleware = createSagaMiddleware();

let store; // eslint-disable-line import/no-mutable-exports

export default function configureStore(initialState, history) {
  const init = () => {
    const middlewares = [sagaMiddleware, routerMiddleware(history)];

    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
    process.env.NODE_ENV !== 'pruduction' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;

    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    store = createStore(
      rootReducer,
      fromJS(initialState),
      enhancers
    );

    if (module.hot && process.env.NODE_ENV !== 'pruduction') {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./rootreducer', () => {
        const nextReducer = require('./rootreducer').default; // eslint-disable-line
        store.replaceReducer(nextReducer);
      });
    }
  };

  return {
    getInstance: () => {
      if (!store) {
        init();
      }
      return store;
    },
  };
}


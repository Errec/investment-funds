// redux
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './redux/rootReducers';
import createSagaMiddleware from 'redux-saga'; // SAGA
import rootSagas from './redux/rootSagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSagas);

export default (props) => {
  const { children } = props;
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

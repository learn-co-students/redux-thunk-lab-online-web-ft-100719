import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'

//2.import Provider from react-redux
import { Provider } from 'react-redux';
//2.import createStore from redux- 4. import applyMiddleware from redux
import { createStore, applyMiddleware } from 'redux';
//5. import thunk from redux-thunk (included in package.json)
import thunk from 'redux-thunk';
//2.import reducer
import catsReducer from './reducers/catsReducer.js';

//1. Create Store function and pass the reducer into it
const store = createStore(catsReducer, applyMiddleware(thunk)) //we'll have to write the reducer.
//pass thunk to applyMiddleware, pass it in as second argument for createStore

//3.wrap the app component with the Provider, pass the provider to the store.
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

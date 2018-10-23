import React from 'react';

import ReactDOM from 'react-dom'

import App from './App'

import { Provider } from 'react-redux'
import {createStore,applyMiddleware } from 'redux'
import reducer from './Reducers'
import thunkMiddleware from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunkMiddleware))

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

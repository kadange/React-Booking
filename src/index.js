import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

// Import for component
import App from './component/app';

//Import for Provider
import {Provider} from 'react-redux';
//Import for createStore
import {createStore} from 'redux';
//Import for reducer
import allReducer from './reducer';

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

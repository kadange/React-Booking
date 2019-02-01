import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {createStore} from 'redux';
import allReducer from './reducer';
import {Provider} from 'react-redux';
import AppMain from './component/AppMain';

const store = createStore(allReducer);

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppMain />
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
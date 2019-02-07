import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {createStore} from 'redux';
import allReducer from './reducer';
import {Provider} from 'react-redux';
import AppMain from './component/AppMain';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(allReducer);

class App extends Component {
  render () {
    return (
      <Router>
        <Provider store={store}>
          <AppMain />
        </Provider>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
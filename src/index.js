import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './js/css/index.css';
import {Provider} from 'react-redux';
import AppMain from './js/component/AppMain';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './js/reducer/store';

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
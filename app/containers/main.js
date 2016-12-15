import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index'

const store = createStore(reducers);

import App from '../components/app';

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

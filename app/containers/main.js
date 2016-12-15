import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore();

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

import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allData from '../reducers/fetchData';

const store = createStore(allData);

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

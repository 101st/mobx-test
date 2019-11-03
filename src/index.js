import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import 'antd/dist/antd.css';

import CarsList from './components/Cars';
import store from './stores';

const stores = {
  store,
  carsStore: store.carsStore,
  dealersStore: store.dealersStore
};

render(
  <Provider {...stores}>
    <CarsList />
  </Provider>,
  document.getElementById('root')
);
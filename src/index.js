import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import 'antd/dist/antd.css';

import CarsList from './components/Cars';
import CarsModel from './models/CarsModel';
import DealersModel from './models/DealersModel';

// Root Store Declaration
class RootStore {
  constructor() {
    this.carsStore = new CarsModel(this);
    this.dealersStore = new DealersModel(this);
  }
}
const rootStore = new RootStore();

render(
  <Provider
    rootStore={rootStore}
    carsStore={rootStore.carsStore}
    dealersStore={rootStore.dealersStore}
  >
    <CarsList />
  </Provider>,
  document.getElementById('root')
);
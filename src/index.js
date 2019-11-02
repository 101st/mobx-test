import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

import CarsList from './components/Cars';
import CarsModel from './models/CarsModel';
import DealersModel from './models/DealersModel';

const carsStore = new CarsModel();
const dealersStroe = new DealersModel();

render(
  <div>
    <CarsList
      carsStore={carsStore}
      dealersStroe={dealersStroe}
    />
  </div>,
  document.getElementById('root')
);
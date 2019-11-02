import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';

import CarsList from './components/Cars';
import CarsModel from './models/CarsModel';

const store = new CarsModel();

render(
  <div>
    <CarsList store={store} />
  </div>,
  document.getElementById('root')
);

// playing around in the console
window.store = store;
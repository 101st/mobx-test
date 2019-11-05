import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import 'antd/dist/antd.css';

import CarsList from './components/Cars';
import DealerModal from './components/DealerModal';
import store from './stores';

const stores = {
  store,
  carsStore: store.carsStore,
  dealersStore: store.dealersStore
};

render(
  <Provider {...stores}>
    <Router history={history}>
      <Switch>
        <Route exact path={['/page/:page', '/page/:page/dealer/:id']} component={CarsList} />
      </Switch>
      <Route path='/page/:page/dealer/:id' component={DealerModal} />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
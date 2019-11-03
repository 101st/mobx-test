import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './history';
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
    <Router history={history}>
      <Switch>
        <Route exact path='/page/:page' component={CarsList} />
        <Redirect to='/page/1' />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
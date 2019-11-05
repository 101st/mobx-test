import React from 'react';
import { action, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import history from '../history';
import { Icon } from 'antd';

@inject('dealersStore')
@observer
class Dealer extends React.Component {
  render() {
    let { dealers } = this.props.dealersStore;
    let { dealer } = this.props;
    dealer = toJS(dealers.find(d => d.id === dealer));
    if (dealer)
      return <Link to={`${history.location.pathname}/dealer/${dealer.id}`}>{dealer.name}</Link>;
    else
      return <Icon type="loading" />;
  }

  @action
  componentDidMount() {
    let { fetchDealers } = this.props.dealersStore;
    let { dealer } = this.props;
    fetchDealers(dealer);
  }
}

export default Dealer;
import React from 'react';
import { action, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Icon } from 'antd';

@inject('dealersStore')
@observer
class Dealer extends React.Component {
  render() {
    let { dealers } = this.props.dealersStore;
    let { dealer } = this.props;
    dealer = dealers.find(d => d.id === dealer);
    if (dealer)
      return toJS(dealer).name;
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
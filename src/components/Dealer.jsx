import React from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Icon } from 'antd';


@inject('dealersStore')
@observer
class Dealer extends React.Component {
  render() {
    let { dealers } = this.props.dealersStore;
    let { dealer } = this.props;
    if (dealers[dealer])
      return dealers[dealer].name;
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
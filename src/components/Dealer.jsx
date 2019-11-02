import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Dealer extends React.Component {

  render() {
    let { } = this.props.dealerStore;
    return (
      <div>
        Dealer
      </div>
    );
  }

  @action
  componentDidMount() {

  }
}

export default Dealer;
import React from 'react';
import { action, toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Modal, Button, Skeleton, Descriptions, Icon } from 'antd';

@inject('dealersStore')
@observer
class DealerModal extends React.Component {

  state = {
    visible: true
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    let { setDealer } = this.props.dealersStore;
    setDealer(id);
  }

  handleCancel = () => {
    let { page } = this.props.match.params;
    this.setState({
      visible: false
    })
    this.props.history.push(`/page/${page}`);
  }

  render() {
    let { dealer } = toJS(this.props.dealersStore);
    if (dealer[0])
      return (
        <Modal
          width={700}
          title={<Link to={dealer[0].url} target='__blanck'>{dealer[0].name}</Link>}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={
            <Button key='Cancel' onClick={this.handleCancel}>
              Cancel
          </Button>}
        >
          <Descriptions title="User Info" bordered column={1}>
            {dealer[0].offices.map((office, key) => {
              return <Descriptions.Item label={`Office #${key + 1}`}>
                <p><Icon type="environment" /> {office.address}</p>
                <p><Icon type="phone" /> {office.phone}</p>
                <p><Icon type="global" /> <Link to={office.url} target='__blank'>{office.url}</Link></p>
              </Descriptions.Item>
            })}
            <Descriptions.Item label="ropInfo">
              <Icon type="user" />{dealer[0].user_metadata.ropInfo}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      )
    else
      return (
        <Modal
          title={`Loading`}
          visible={true}
          onCancel={this.handleCancel}
          footer={
            <Button key='Cancel' onClick={this.handleCancel}>
              Cancel
        </Button>}
        >
          <Skeleton active />
        </Modal>
      )
  }
}

export default DealerModal;
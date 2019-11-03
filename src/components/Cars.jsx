import React from 'react';
import { action } from 'mobx';
import { inject, observer } from 'mobx-react';
import { Table, Pagination } from 'antd';
import Dealer from '../components/Dealer';

@inject('carsStore', 'dealersStore')
@observer
class Cars extends React.Component {
  render() {
    let { history } = this.props;
    let { page } = this.props.match.params;
    let { cars, carsTotalCount, per_page, loading: carsLoader, fetchCars } = this.props.carsStore;
    let { dealersCount, loading: dealersLoader } = this.props.dealersStore;
    return (
      <div>
        <h4>Cars: {carsTotalCount}, Dealers: {dealersCount}</h4>
        <Table
          loading={carsLoader && dealersLoader}
          pagination={false}
          bordered={true}
          dataSource={cars}
          size="small">
          <Table.Column title="Brand" dataIndex="brand" key="brand" />
          <Table.Column title="Name" dataIndex="name" key="name" />
          <Table.Column title="Dealer" dataIndex="dealer" key="dealer"
            render={dealer => <Dealer dealer={dealer} />}
          />
        </Table>

        <Pagination
          simple
          onChange={(page) => { //TODO
            history.push(`/page/${page}`);
            fetchCars(page, per_page)
          }}
          pageSize={per_page}
          defaultCurrent={Number(page)}
          total={carsTotalCount}
          style={{ marginTop: '10px' }} />
      </div>
    );
  }

  @action
  componentDidMount() {
    let { page, per_page, fetchCars } = this.props.carsStore;
    fetchCars(page, per_page);
  }
}

export default Cars;
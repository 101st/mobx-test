import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { Table, Pagination, Icon } from 'antd';
import Dealer from '../components/Dealer';

const columns = [
  {
    title: 'Brand',
    dataIndex: 'brand',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Dealer',
    dataIndex: 'dealer'
  }
];

@observer
class Cars extends React.Component {
  render() {
    let { cars, carsTotalCount, page, per_page, loading: carsLoader, fetchCars } = this.props.carsStore;
    let { fetchDealers, dealers, loading: dealersLoader } = this.props.dealersStroe;
    console.log(dealers);
    return (
      <div>
        <h4>Cars List ({carsTotalCount})</h4>
        <Table
          loading={carsLoader}
          pagination={false}
          bordered={true}
          dataSource={cars}
          size="small">
          <Table.Column title="Brand" dataIndex="brand" key="brand" />
          <Table.Column title="Name" dataIndex="name" key="name" />
          <Table.Column title="Dealer" dataIndex="dealer" key="dealer"
            render={dealerId => {
              fetchDealers(dealerId);
              let dealer = dealers[dealerId];
              if (dealer)
                //return <div>{JSON.stringify(dealer)}</div>
              //else
                return <Icon style={{ marginLeft: '50%' }} type="loading" />
            }}
          />
        </Table>

        <Pagination
          simple
          onChange={fetchCars}
          pageSize={per_page}
          defaultCurrent={page}
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
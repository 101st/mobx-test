import React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { Table, Pagination } from 'antd';

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
    dataIndex: 'Dealer'
  }
];

@observer
class Cars extends React.Component {
  @observable page;

  render() {
    let { cars, carsTotalCount, page, per_page, loading, fetchCars } = this.props.store;
    return (
      <div>
        <h4>Cars List ({carsTotalCount})</h4>
        <Table
          loading={loading}
          pagination={false}
          bordered={true}
          columns={columns}
          dataSource={cars}
          size="small" />

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
    let { page, per_page, fetchCars } = this.props.store;
    fetchCars(page, per_page);
  }
}

export default Cars;
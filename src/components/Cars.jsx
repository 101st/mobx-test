import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, Pagination } from 'antd';
import Dealer from '../components/Dealer';

import './style.css';

@inject('carsStore', 'dealersStore')
@observer
class Cars extends React.Component {
  render() {
    let { history } = this.props;
    let { page } = this.props.match.params;
    let { cars, carsTotalCount, per_page, loading: carsLoader, setPage } = this.props.carsStore;
    let { loading: dealersLoader } = this.props.dealersStore;
    return (
      <div className='cars-table'>
        <Table
          loading={carsLoader && dealersLoader}
          pagination={false}
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
            setPage(page);
          }}
          pageSize={per_page}
          defaultCurrent={Number(page)}
          total={carsTotalCount}
          style={{ marginTop: '10px' }} />
      </div>
    );
  }
}

export default Cars;
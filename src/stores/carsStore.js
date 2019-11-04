import { observable, computed, action, autorun } from 'mobx';
import * as api from '../apis/cars';

export default class {
  @observable page = 1;
  @observable per_page = 15;
  @observable cars = [];
  @observable headers = {};
  @observable loading = true;

  @computed
  get carsTotalCount() {
    return Number(this.headers['x-total-count']) || 0;
  }

  @action.bound
  setPage(page) {
    this.loading = true;
    this.page = page;
  }

  reactToChangePage = autorun(async () => {
    let { data, headers } = await api.getCars(this.page, this.per_page);
    this.headers = headers;
    this.cars = data.map(car => { car.key = car.id; return car; });
  });
}
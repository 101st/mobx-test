import { observable, computed, action } from 'mobx';
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

  reactToChangePage = autorun(async () => {
    this.loading = true;
    let { data, headers } = await api.getCars(this.page, this.per_page);
    this.headers = headers;
    this.cars = data.map(car => { car.key = car.id; return car; });
  });
}
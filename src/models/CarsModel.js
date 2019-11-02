import { observable, computed, action } from 'mobx';
import * as api from '../apis/cars';

export default class CarsModel {
  @observable cars = [];
  @observable headers = {};
  @observable page = 1;
  @observable per_page = 15;
  @observable loading = true;

  @computed
  get carsCount() {
    return this.cars.length;
  }

  @computed
  get carsTotalCount() {
    return Number(this.headers['x-total-count']) || 0;
  }

  @action.bound
  async fetchCars(page = 1, per_page = 15) {
    try {
      this.loading = true;
      let { data, headers } = await api.getCars(page, per_page);
      this.headers = headers;
      this.cars = data.map(car => { car.key = car.id; return car; });
      this.loading = false;
    } catch (err) {
      throw err;
    }
  }
}
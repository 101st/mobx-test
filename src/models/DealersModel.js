import { observable, action } from 'mobx';
import * as api from '../apis/cars';

export default class DealersModel {
  @observable dealers = [];
  @observable loading = true;

  @action.bound
  async fetchDealers(id) {
    try {
      if (this.dealers[id] === undefined) {
        let { data } = await api.getDealer(id);
        this.dealers[id] = data;
      }
    } catch (err) {
      throw err;
    }
  }
}
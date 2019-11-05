import { observable, computed, action } from 'mobx';
import * as api from '../apis/cars';

export default class {
  @observable dealers = [];
  @observable dealer = {};
  @observable loading = true;
  loadingQueueCount = 0;

  @computed
  get dealersCount() {
    return this.dealers.length;
  }

  @action.bound
  async setDealer(id) {
    try {
      await this.fetchDealers(id);
      this.dealer = this.dealers.filter(dealer => { return dealer.id === id });
    } catch (err) {
      throw err;
    }
  }

  @action.bound
  async fetchDealers(id) {
    try {
      let check = this.dealers.filter(dealer => { return dealer.id === id });
      if (check.length === 0) {
        this.loadingQueueCount++;
        this.loading = true;
        let { data } = await api.getDealer(id);
        data.id = id; //TODO API bugs
        this.dealers.push(data);
        this.loadingQueueCount--;
        if (this.loadingQueueCount === 0) this.loading = false;
      }
    } catch (err) {
      throw err;
    }
  }
}
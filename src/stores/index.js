import carsStore from './carsStore';
import dealersStore from './dealersStore';

class store {
  constructor() {
    this.carsStore = new carsStore();
    this.dealersStore = new dealersStore();
  }
  
}

export default new store();
import axios from 'axios';
import * as utils from '../utils';

const headers = { 'X-CS-Dealer-Id-Only': 1, 'Content-Type': 'application/json' };
const getURL = path => `https://jlrc.dev.perx.ru/carstock/api/v1/${path}`;
const GET = path => axios.get(getURL(path), { headers });

export const getCars = async (page = 1, per_page = 10) => {
  try {
    return GET(`vehicles/?state=active&group=new&page=${page}&per_page=${per_page}`);
  } catch (error) {
    throw error;
  }
};

export const getDealer = async (id) => {
  try {
    await utils.sleep(utils.getRandomInt(500, 1500)); //TODO
    return GET(`dealers/${id}`);
  } catch (error) {
    throw error;
  }
};
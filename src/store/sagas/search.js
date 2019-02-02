import { call, put} from 'redux-saga/effects';
import { searchSuccess, searchFailure } from '../actions/search';
import api from '../../services/api';

const token = sessionStorage.getItem('x-access-token');

export function* getSearch(action) {
  console.log('Saga: ', action.payload.data);
  try {
    const data = yield call(api.get(`/search?q=${action.payload.data.q}&type=${action.payload.data.filter}&access_token=${token}`));
    console.log(data);
     yield put(searchSuccess(data));
  } catch (e) {
    yield put(searchFailure(e));
  }
}

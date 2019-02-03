import { call, put} from 'redux-saga/effects';
import { searchSuccess, searchFailure, selectArtistSuccess, selectArtistFailure } from '../actions/search';
import api from '../../services/api';

const token = sessionStorage.getItem('x-access-token');
if(token === null) console.log('token é null');

export function* getSearch(action) {
  console.log('Saga: ', action.payload.data);
  try {
    const { data } = yield call(api.get, `/search?q=${action.payload.data.q}&type=${action.payload.data.filter}&access_token=${token}`);
    console.log(data);
     yield put(searchSuccess(data));
  } catch (e) {
    yield put(searchFailure(e));
  }
};

export function* getArtist(action) {
  console.log('Saga: ', action.payload.data);
  try {
    const { data } = yield call(api.get, `/artists/${action.payload.data}?access_token=${token}`);
    const albumsRespose = yield call(api.get, `/artists/${action.payload.data}/albums/?access_token=${token}`);
    data.albums = albumsRespose.data;
    yield put(selectArtistSuccess(data));
  } catch (e) {
    yield put(selectArtistFailure(e));
  }
};

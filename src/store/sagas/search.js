import { call, put} from 'redux-saga/effects';
import { searchSuccess, searchFailure, selectArtistSuccess, selectArtistFailure, selectAlbumSuccess, selectAlbumFailure } from '../actions/search';
import api from '../../services/api';

export function* getSearch(action) {
  let token = sessionStorage.getItem('x-access-token');
  try {
    const { data } = yield call(api.get, `/search?q=${action.payload.data.q}&type=${action.payload.data.filter}&access_token=${token}`);
    console.log(data);
    yield put(searchSuccess(data));
  } catch (e) {
    yield put(searchFailure(e));
  }
};

export function* getArtist(action) {
  let token = sessionStorage.getItem('x-access-token');
  try {
    const { data } = yield call(api.get, `/artists/${action.payload.data}?access_token=${token}`);
    const albumsRespose = yield call(api.get, `/artists/${action.payload.data}/albums/?access_token=${token}`);
    data.albums = albumsRespose.data;
    yield put(selectArtistSuccess(data));
  } catch (e) {
    yield put(selectArtistFailure(e));
  }
};

export function* getAlbum(action) {
  let token = sessionStorage.getItem('x-access-token');
  try {
    const { data } = yield call(api.get, `/albums/${action.payload.data}?access_token=${token}`);
    const tracksResponse = yield call(api.get, `/albums/${action.payload.data}/tracks/?access_token=${token}`);
    data.tracks = tracksResponse;
    // data.track = albumsRespose.data;
    yield put(selectAlbumSuccess(data));
  } catch (e) {
    yield put(selectAlbumFailure(e));
  }
};

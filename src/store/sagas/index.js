import { all, takeLatest } from 'redux-saga/effects';
import { getSearch, getArtist, getAlbum} from './search';

export default function* rootSaga() {
    yield all([
      takeLatest('SEARCH_REQUEST', getSearch),
      takeLatest('SELECT_ARTIST_REQUEST', getArtist),
      takeLatest('SELECT_ALBUM_REQUEST', getAlbum),
    ]);
};

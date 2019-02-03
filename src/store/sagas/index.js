import { all, takeLatest } from 'redux-saga/effects';
import { getSearch, getArtist} from './search';


export default function* rootSaga() {
    yield all([
      takeLatest('SEARCH_REQUEST', getSearch),
      takeLatest('SELECT_ARTIST_REQUEST', getArtist),
    ]);
};

import { all, takeLatest } from 'redux-saga/effects';
import { getSearch} from './search';

export default function* rootSaga() {
    yield all([
      takeLatest('SEARCH_REQUEST', getSearch),
    ]);
};

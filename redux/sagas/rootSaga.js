import { fork } from 'redux-saga/effects';
import bookListWatcherSaga from './bookListSaga';
import bookDetailWatcherSaga from './bookDetailSaga';
import paginatedBookListWatcherSaga from './paginatedBookListSaga';

export default function* rootSaga() {
    yield fork(bookListWatcherSaga)
    yield fork(bookDetailWatcherSaga)
    yield fork(paginatedBookListWatcherSaga)
    // code after fork effect
}

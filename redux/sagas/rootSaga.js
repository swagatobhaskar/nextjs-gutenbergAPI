import { fork } from 'redux-saga/effects';
import bookListWatcherSaga from './bookListSaga';
import bookDetailWatcherSaga from './bookDetailSaga';

export default function* rootSaga() {
    yield fork(bookListWatcherSaga)
    yield fork(bookDetailWatcherSaga)
    // code after fork effect
}

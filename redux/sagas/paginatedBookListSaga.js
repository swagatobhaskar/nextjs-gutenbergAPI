import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import { fetchPaginatedBookList, fetchBookListError, fetchBookListSuccess } from '../slices/bookListSlice';

export default function* paginatedBookListWatcherSaga() {
    yield takeLatest(fetchPaginatedBookList, paginatedBookListWorkerSaga);
}

function getPaginatedBookList(payload) {
    return axios({
        method: "GET",
        url: payload
    });
}

function* paginatedBookListWorkerSaga({payload}) {
    try {
        const resp = yield call(getPaginatedBookList, payload);
        const bookList = resp.data;
        yield put(fetchBookListSuccess({ bookList }));
    } catch(err) {
        yield put(fetchBookListError(err));
    }
}
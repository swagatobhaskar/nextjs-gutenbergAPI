import { call, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios';

import axiosInstance from '../../utils/baseAxios';
import { fetchBookList, fetchBookListError, fetchBookListSuccess } from '../slices/bookListSlice';

export default function* bookListWatcherSaga() {
    yield takeLatest(fetchBookList, bookListWorkerSaga);
}

function getBookList() {
    return axiosInstance.get('/');
}

function* bookListWorkerSaga() {
    try {
        const resp = yield call(getBookList);
        const bookList = resp.data;
        yield put(fetchBookListSuccess({ bookList }));
    } catch(err) {
        yield put(fetchBookListError(err));
    }
}
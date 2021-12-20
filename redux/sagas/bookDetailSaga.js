import { call, put, takeLatest } from 'redux-saga/effects';

import axiosInstance from '../../utils/baseAxios';
import { fetchBookDetail } from '../slices/bookDetailSlice';

export default function* bookDetailWatcherSaga() {
    yield takeLatest(fetchBookDetail, bookDetailWorkerSaga);
}

function getBookDetail(action) {
    const resp = axiosInstance.get(`/${id}/`);
    return resp;
}

function* bookDetailWorkerSaga(action) {
    try {
        const resp = yield call(getBookDetail, action);
        const bookDetail = resp.data;
        yield put({ type: fetchBookDetailSuccess, bookDetail });

    } catch(err) {
        yield put({ type: fetchBookDetailError, err });
    }
}
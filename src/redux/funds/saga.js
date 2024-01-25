/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';

import FundsService from '../../services/funds.js';

/* Types */
import {
    FETCH_FUNDS_DETAIL_FULL,
} from './types';

function* fetchFundsDetailFull(action) {
    const response = yield call(FundsService.listFunds, action);
    if (response.status === 200) {
        yield put({ type: FETCH_FUNDS_DETAIL_FULL.SUCCESS, funds: response.data});
    } else {
        yield put({ type: FETCH_FUNDS_DETAIL_FULL.FAILURE, fundsDetailFullError: response.data.error });
    }
}

export const fundsSaga = [
    takeEvery(FETCH_FUNDS_DETAIL_FULL.REQUEST, fetchFundsDetailFull),
];

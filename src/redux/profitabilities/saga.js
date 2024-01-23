/* Modules */
import { call, put, takeEvery } from 'redux-saga/effects';
import moment from 'moment';
import ProfitabilitiesService from '../../services/profitabilities.js';

/* Types */
import {
    FETCH_CURRENT_PROFITABILITIES,
} from './types';

function* fetchCurrentProfitabilities(action) {
    const response = yield call(ProfitabilitiesService.listProfitabilities, action);
    // let baseProfitabilities = response.data[0];
    //     response.data.forEach((profitabilitie) => {
        //         if (moment(baseProfitabilities.reference_date) < moment(profitabilitie.reference_date)) {
            //             baseProfitabilities = profitabilitie
            //         }
            //     });
    if (response.status === 200) {
        yield put({ type: FETCH_CURRENT_PROFITABILITIES.SUCCESS, cdiData: response.data });
    } else {
        yield put({ type: FETCH_CURRENT_PROFITABILITIES.FAILURE, cdiDataError: response.data.error });
    }
}

export const profitabilitiesSaga = [
    takeEvery(FETCH_CURRENT_PROFITABILITIES.REQUEST, fetchCurrentProfitabilities),
];

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

    if (response.status === 200) {

        let CDIData = [];
        let latestCDI = [];
        let IBOVData = [];
        let latestIBOV = [];

        response.data.forEach((profitabilitie) => {
            if (profitabilitie.benchmark_name === "CDI") {
                CDIData.push(profitabilitie);
            } else {IBOVData.push(profitabilitie)}
        });

        latestCDI = CDIData[0];
        CDIData.forEach((CDI) => {
            if (moment(latestCDI.reference_date) <= moment(CDI.reference_date)) {
                latestCDI = CDI;
            }
        })

        latestIBOV = IBOVData[0];
        IBOVData.forEach((IBOV) => {
            if (moment(latestIBOV.reference_date) <= moment(IBOV.reference_date)) {
                latestIBOV = IBOV;
            }
        })

        yield put({
            type: FETCH_CURRENT_PROFITABILITIES.SUCCESS,
            profitabilitiesData: response.data,
            profitabilitiesCDIData: CDIData,
            profitabilitiesIBOVData: IBOVData,
            latestCDIData: latestCDI,
            latestIBOVData: latestIBOV,
         });
    } else {
        yield put({ type: FETCH_CURRENT_PROFITABILITIES.FAILURE, profitabilitiesError: response.data.error });
    }
}

export const profitabilitiesSaga = [
    takeEvery(FETCH_CURRENT_PROFITABILITIES.REQUEST, fetchCurrentProfitabilities),
];

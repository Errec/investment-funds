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
        const fundsFixedIncome = [];
        const fundsVariableIncome = [];
        const differentiatedStrategies = [];
        const funds = [];
        const isLoading = false;
        response.data.forEach(fund => {
            switch (fund.specification.fund_main_strategy.fund_macro_strategy) {
                case 1:
                    fundsFixedIncome.push(fund)
                    break;
                case 2:
                    differentiatedStrategies.push(fund)
                    break;
                case 3:
                    fundsVariableIncome.push(fund)
                    break;
                default:
                    break;
            }
        });

        if(fundsFixedIncome.length) { funds.push(fundsFixedIncome) }
        if(differentiatedStrategies.length) { funds.push(differentiatedStrategies) }
        if(fundsVariableIncome.length) { funds.push(fundsVariableIncome) }

        yield put({ type: FETCH_FUNDS_DETAIL_FULL.SUCCESS, funds, isLoading });
    } else {
        yield put({ type: FETCH_FUNDS_DETAIL_FULL.FAILURE, fundsDetailFullError: response.data.error });
    }
}

export const fundsSaga = [
    takeEvery(FETCH_FUNDS_DETAIL_FULL.REQUEST, fetchFundsDetailFull),
];

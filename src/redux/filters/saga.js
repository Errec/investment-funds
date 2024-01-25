/* Modules */
import { put, takeEvery } from 'redux-saga/effects';

/* Types */
import {
    SET_FUNDS_FILTER,
} from './types';

function* filterFundsValues(action) {
        let filteredFunds = [];
        if (action.data.funds.length) {            
            filteredFunds = action.data.funds.filter((fund) => {
                if(fund.simple_name){
                    return fund.simple_name.toLowerCase().indexOf(action.data.searchValue.toLowerCase()) !== -1 ||
                           fund.specification.fund_class.toLowerCase().indexOf(action.data.searchValue.toLowerCase()) !== -1 ||
                           fund.specification.fund_type.toLowerCase().indexOf(action.data.searchValue.toLowerCase()) !== -1;
                }
            })
        }

        yield put({ type: SET_FUNDS_FILTER.SUCCESS, filteredFunds });

}

export const filtersSaga = [
    takeEvery(SET_FUNDS_FILTER.REQUEST, filterFundsValues),
];

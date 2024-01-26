/* Modules */
import numeral from 'numeral'
import { call, put, takeEvery } from 'redux-saga/effects';

// Services
import FundsService from '../../services/funds.js';

// Helpers
import returnColorBorder from '../../helpers/returnColorBorder'

/* Types */
import {
    FETCH_FUNDS_DETAIL_FULL,
} from './types';

function* fetchFundsDetailFull(action) {
    const response = yield call(FundsService.listFunds, action);
    if (response.status === 200) {
        response.data.map(item => item.age)
        .filter((value, index, self) => self.indexOf(value) === index)


        const minValueFilter = [...new Set(response.data.map((item)=> Number(item.operability.minimum_initial_application_amount)))].sort((a, b) => a - b)
            .map((amount) => { 
                return { 
                    value: amount, 
                    label: 'R$' + numeral(Number(amount).toFixed(2)).format('0,000.00'), 
                    
                }; 
        });

        const minRetrievalFilter = [...new Set(response.data.map(item => Number(item.operability.retrieval_quotation_days)))].sort((a, b) => a - b)
            .map((days) => { 
                return { 
                    value: days, 
                    label: days <= 1 ? days + " dia útil" : days + " dias úteis", 
                }; 
        });

        const riskFilter = [...new Set(response.data.map(item => Number(item.specification.fund_risk_profile.score_range_order)))].sort((a, b) => a - b)
            .map((risk) => { 
                return { 
                    value: risk, 
                    label: returnColorBorder(risk), 
                }; 
        });

        
        const children = [...new Set(response.data.map(item => item.specification.fund_main_strategy.name))]
        .map((strategy) => {
            return { 
                value: strategy, 
                label: strategy, 
            }; 
        });
        
        const fixedIncomeNode = [{
            value: 'RENDA FIXA',
            label: 'RENDA FIXA',
            children,
        }];
        yield put({ type: FETCH_FUNDS_DETAIL_FULL.SUCCESS, funds: response.data, minValueFilter, minRetrievalFilter, riskFilter, fixedIncomeNode });
    } else {
        yield put({ type: FETCH_FUNDS_DETAIL_FULL.FAILURE, fundsDetailFullError: response.data.error });
    }
}

export const fundsSaga = [
    takeEvery(FETCH_FUNDS_DETAIL_FULL.REQUEST, fetchFundsDetailFull),
];

// Types
import {
    FETCH_FUNDS_DETAIL_FULL,
} from './types';

const INITIAL_STATE = {
    fundsDetailFull: {
        data: [],
        minValueFilter: [],
        minRetrievalFilter: [],
        riskFilter: [],
        fixedIncomeNode: [],
        error: '',
        isLoading: true,
    },
};

const fundsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FUNDS_DETAIL_FULL.REQUEST:
            return {
                ...state,
                fundsDetailFull: {
                    ...state.fundsDetailFull,
                    isLoading: true,
                },
            };

        case FETCH_FUNDS_DETAIL_FULL.SUCCESS:
            return {
                ...state,
                fundsDetailFull: {
                    data: action.funds,
                    minValueFilter: action.minValueFilter,
                    minRetrievalFilter: action.minRetrievalFilter,
                    riskFilter: action.riskFilter,
                    fixedIncomeNode: action.fixedIncomeNode,
                    isLoading: false,
                },
            };

        case FETCH_FUNDS_DETAIL_FULL.FAILURE:
            return {
                ...state,
                fundsDetailFull: {
                    data: [],
                    minRetrievalFilter: [],
                    minRetrievalFilter: [],
                    riskFilter: [],
                    fixedIncomeNode: [],
                    isLoading: false,
                    error: action.fundsDetailFullError,
                },
            };

        case FETCH_FUNDS_DETAIL_FULL.RESET:
            return {
                ...state,
                fundsDetailFull: INITIAL_STATE.fundsDetailFull,
            };

        default:
            return state;
    }
};

export default fundsReducer;

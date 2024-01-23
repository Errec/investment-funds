// Types
import {
    FETCH_CURRENT_PROFITABILITIES,
} from './types';

const INITIAL_STATE = {
    currentProfitabilities: {
        data: [],
        lastCDIData: {},
        lastIBOVData: {},
        error: '',
        isLoading: true,
    },
};

const profitabilitiesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CURRENT_PROFITABILITIES.REQUEST:
            return {
                ...state,
                currentProfitabilities: {
                    ...state.currentProfitabilities,
                    isLoading: true,
                },
            };

        case FETCH_CURRENT_PROFITABILITIES.SUCCESS:
            return {
                ...state,
                currentProfitabilities: {
                    data: action.cidData,
                    lastCDIData: action.lastCDIData,
                    lastIBOVData: action.lastIBOVData,
                    isLoading: false,
                },
            };

        case FETCH_CURRENT_PROFITABILITIES.FAILURE:
            return {
                ...state,
                currentProfitabilities: {
                    data: [],
                    lastCDIData: {},
                    lastIBOVData: {},
                    isLoading: false,
                    error: action.cdiDataError,
                },
            };

        default:
            return state;
    }
};

export default profitabilitiesReducer;

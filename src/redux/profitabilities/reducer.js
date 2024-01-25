// Types
import {
    FETCH_CURRENT_PROFITABILITIES,
} from './types';

const INITIAL_STATE = {
    currentProfitabilities: {
        data: [],
        latestCDIData: {},
        latestIBOVData: {},
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
                    data: action.profitabilitiesData,
                    profitabilitiesCDIData: action.profitabilitiesCDIData,
                    profitabilitiesIBOVData: action.profitabilitiesIBOVData,
                    latestCDIData: action.latestCDIData,
                    latestIBOVData: action.latestIBOVData,
                    isLoading: false,
                },
            };

        case FETCH_CURRENT_PROFITABILITIES.FAILURE:
            return {
                ...state,
                currentProfitabilities: {
                    data: [],
                    latestCDIData: {},
                    latestIBOVData: {},
                    profitabilitiesCDIData: [],
                    profitabilitiesIBOVData: [],
                    isLoading: false,
                    error: action.profitabilitiesError,
                },
            };

        default:
            return state;
    }
};

export default profitabilitiesReducer;

// Types
import {
    SET_FUNDS_FILTER,
    // SLIDER_FILTER,
} from './types';

const INITIAL_STATE = {
    fundsFilterData: {
        filteredData: [],
        searchValue: '',
    },
};

const filtersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case SLIDER_FILTER.REQUEST:
        //     return {
        //         ...state,
        //         fundsFilterData: {
        //             ...state.fundsFilterData,
        //         },
        //     };

        // case SLIDER_FILTER.SUCCESS:
        //     return {
        //         ...state,
        //         fundsFilterData: {
        //             filteredData: action.filteredFunds,
        //         },
        //     };

        case SET_FUNDS_FILTER.REQUEST:
            return {
                ...state,
                fundsFilterData: {
                    ...state.fundsFilterData,
                },
            };

        case SET_FUNDS_FILTER.SUCCESS:
            return {
                ...state,
                fundsFilterData: {
                    filteredData: action.filteredFunds,
                },
            };

        case SET_FUNDS_FILTER.RESET:
            return {
                ...state,
                fundsFilterData: INITIAL_STATE.fundsFilterData,
            };

        default:
            return state;
    }
};

export default filtersReducer;

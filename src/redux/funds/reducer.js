// Types
import {
    FETCH_FUNDS_DETAIL_FULL,
} from './types';

const INITIAL_STATE = {
    fundsDetailFull: {
        data: [],
        error: '',
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
                    isLoading: false,
                },
            };

        case FETCH_FUNDS_DETAIL_FULL.FAILURE:
            return {
                ...state,
                fundsDetailFull: {
                    data: [],
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

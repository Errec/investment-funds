/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import fundsReducer from './funds/reducer';
import profitabilitiesReducer from './profitabilities/reducer';
import filtersReducer from './filters/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    fundsReducer: fundsReducer,
    profitabilitiesReducer: profitabilitiesReducer,
    filtersReducer: filtersReducer,
});

export default rootReducers;

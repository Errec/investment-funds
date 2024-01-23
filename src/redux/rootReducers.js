/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import fundsReducer from './funds/reducer';
import profitabilitiesReducer from './profitabilities/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    fundsReducer: fundsReducer,
    profitabilitiesReducer: profitabilitiesReducer,
});

export default rootReducers;

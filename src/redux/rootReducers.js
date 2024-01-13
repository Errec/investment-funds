/* Modules */
import { combineReducers } from 'redux';

/* Reducers */
import fundsReducer from './funds/reducer';

// all the reducers are in one place
const rootReducers = combineReducers({
    fundsReducer: fundsReducer,
});

export default rootReducers;

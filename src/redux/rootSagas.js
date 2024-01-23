// Modules
import { all } from 'redux-saga/effects';

// Saga
import { fundsSaga } from './funds/saga';
import { profitabilitiesSaga } from './profitabilities/saga';

function* rootSagas() {
  yield all([
    ...fundsSaga,
    ...profitabilitiesSaga,
  ]);
}

export default rootSagas;

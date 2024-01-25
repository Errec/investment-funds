// Modules
import { all } from 'redux-saga/effects';

// Saga
import { fundsSaga } from './funds/saga';
import { profitabilitiesSaga } from './profitabilities/saga';
import { filtersSaga } from './filters/saga';

function* rootSagas() {
  yield all([
    ...fundsSaga,
    ...profitabilitiesSaga,
    ...filtersSaga,
  ]);
}

export default rootSagas;

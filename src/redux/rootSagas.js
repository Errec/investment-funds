// Modules
import { all } from 'redux-saga/effects';

// Saga
import { fundsSaga } from './funds/saga';

function* rootSagas() {
  yield all([
    ...fundsSaga,
  ]);
}

export default rootSagas;

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import reduxLogger from 'redux-logger'

import rootSaga from './modules/rootSagas'
import rootReducer from './modules/rootReducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxLogger),
)
sagaMiddleware.run(rootSaga)

export default store

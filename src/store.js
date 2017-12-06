import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import reducer from './reducer'

export default function configureStore(initialState = {}) {
  const middlewares = []
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  const enhancers = [applyMiddleware(...middlewares)]
  if (typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }
  const store = createStore(
    reducer,
    initialState,
    compose(...enhancers),
  )

  sagaMiddleware.run(saga)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

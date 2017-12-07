import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import saga from './saga'
import reducer from './reducers'

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
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

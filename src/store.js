import { createStore, compose } from 'redux'
import reducer from './reducer'

export default function configureStore(initialState = {}) {
  const enhancers = []
  if (typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }
  const store = createStore(
    reducer,
    initialState,
    compose(...enhancers),
  )

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

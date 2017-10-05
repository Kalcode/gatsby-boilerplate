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
  return store
}

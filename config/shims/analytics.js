
import { browserHistory } from 'react-router'
const view = '__VIEW__'
const event = '__EVENT__'

export default class Analytics {
  static view({ pathname: path }) {
    this.log('[GA_VIEW] ', path)
    this.try(view, path)
  }

  static [view]([ path ]) {
    window.ga('send', 'pageview', path)
  }

  static event(category, action, label, value) {
    this.log('[GA_EVENT]', category, action, label, value)
    this.try(event, category, action, label, value)
  }

  static [event]([ category, action, label, value ]) {
    window.ga('send', 'event', category, action, label, value)
  }

  static log(...messages) {
    if (process.env.NODE_ENV === 'production') return
    console.log(messages.join(' '))
  }

  static try(method, ...args) {
    try {
      if (process.env.NODE_ENV !== 'production') return
      if (typeof window === 'undefined') return
      this[method](args)
    } catch (e) {}
  }

  static mount() {
    if (this.mounted) return
    this.mounted = true
    browserHistory.listen(l => this.view(l))
  }
}

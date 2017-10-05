import PropTypes from 'prop-types'
import { Scene } from 'scrollmagic'

export default function decorate(target) {
  return classDeclaration(target)
}

function classDeclaration(target) {
  return @displayName(target) class extends target {
    static contextTypes = {
      ...target.contextTypes,
      scrollmagic: PropTypes.any,
    }

    componentDidMount() {
      setTimeout(() => {
        this.__super_componentDidMount()
        this.__add_scenes()
      }, 1)
    }

    __super_componentDidMount() {
      if (typeof super.componentDidMount !== 'function') return
      super.componentDidMount()
    }

    __add_scenes() {
      const scenes = this.__scenes
      scenes.forEach(scene => {
        if (process.env.NODE_ENV === 'development') {
          if (scene.indicatorName) scene.addIndicators({ name: scene.indicatorName })
          else scene.addIndicators()
        }
        scene.addTo(this.context.scrollmagic)
      })
    }

    get __scenes() {
      const keys = Object.getOwnPropertyNames(this)
      return keys.map(key => {
        if (this[key] instanceof Scene) return this[key]
      }).filter(c => c)
    }
  }
}

function displayName(target) {
  return (T) => {
    const value = target.displayName || target.name || 'Component'
    Object.defineProperty(T, 'displayName', { value, readonly: false })
    return T
  }
}

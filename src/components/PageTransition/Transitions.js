export const timeout = 250

export default class Transitions {
  static onEntering = (node) => {
    TweenMax.set(node, { x: '100%' })
  }
  static onEntered = (node) => {
    TweenMax.to(node, timeout / 1000, { x: '200%' })
  }
  static onExiting = (node) => {
    TweenMax.fromTo(node, timeout / 1000, { x: '0%' }, { x: '100%' })
  }
}

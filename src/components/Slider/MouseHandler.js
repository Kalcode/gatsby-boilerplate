export default class MouseHandler {
  constructor(component) {
    this.component = component
    this.init()
  }

  init() {
    window.addEventListener('wheel', this.onWheel)
  }

  destroy() {
    window.removeEventListener('wheel', this.onWheel)
  }

  onWheel = ({ deltaY }) => {
    if (deltaY < 0) this.component.setSlide('next')
    else if (deltaY > 0) this.component.setSlide('prev')
  }
}

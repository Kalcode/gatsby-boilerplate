export default class KeyHandler {
  constructor(component) {
    this.component = component
    this.init()
  }

  init() {
    window.addEventListener('keydown', this.onKeydown)
  }

  destroy() {
    window.removeEventListener('keydown', this.onKeydown)
  }

  onKeydown = (event) => {
    if (event.key === 'ArrowLeft') this.component.setSlide('prev')
    else if (event.key === 'ArrowRight') this.component.setSlide('next')
    else if (event.key === 'ArrowUp') this.component.setSlide('prev')
    else if (event.key === 'ArrowDown') this.component.setSlide('next')
    else if (event.keyCode >= 49 && event.keyCode <= 57) {
      this.component.goTo(Number(event.key) - 1)
    }
  }
}

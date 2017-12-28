export default (target) => {
  return function() {
    TweenLite.to(window, 2, {
      scrollTo: {y: `#${target}`, offsetY: 50},
      ease: Power2.easeOut,
    })
  }
}

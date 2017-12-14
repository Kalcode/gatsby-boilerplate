import React, { Component } from 'react'
import Link from 'components/Link'

import content from 'content/page-2.json'

export default function Page2(props) {
  return (
    <main>
      <div className='row columns'>
        <h1>{content.title}</h1>
        <p>{content.intro}</p>
        <Link to={content.cta.to}>{content.cta.text}</Link>
        <div style={{ margin: '20px 0' }}>
          <Animation />
        </div>
        <div style={{ marginTop: '2000px' }}>
          <div>{content.outro}</div>
        </div>
      </div>
    </main>
  )
}


class Animation extends Component {

  game = { score: 0 }

  state = {
    score: 0,
  }

  componentDidMount() {
    this.add20()
    this.moveRight()
  }

  add20() {
    TweenLite.to(this.game, 10, { score: '+=20', roundProps: 'score', onUpdate: this.updateHandler, ease: Linear.easeNone })
    this.setState({ score: 20 })
  }

  moveRight() {
    TweenLite.to(this.node, 5, { x: '200%', rotation: '360' })
  }

  updateHandler = () => {
    this.forceUpdate()
  }

  render() {
    return (
      <div style={{ height: 80, width: 80, borderRadius: '100%', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center' }} ref={c => { this.node = c }}>
        {this.game.score}
      </div>
    )
  }
}

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default class Title extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    opened: PropTypes.bool,
    toggle: PropTypes.func,
  }

  onClick = (event) => {
    this.props.toggle()
  }

  render() {
    const { children, opened } = this.props
    const status = opened ? <span>-</span> : <span>+</span>
    return (
      <div className={styles.wrapper}>
        <div className={styles.container} onClick={this.onClick}>
          <h3 className={styles.title}>
            {children}
            {status}
          </h3>
        </div>
      </div>
    )
  }
}

Title.defaultProps = {
  color: 'green',
}

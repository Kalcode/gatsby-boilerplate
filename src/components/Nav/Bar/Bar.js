import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Hamburger from '../Hamburger'
import Headroom from 'react-headroom'
import Link from 'components/Link'

import styles from './styles.module.scss'
import './headroom.scss'

export default class Bar extends PureComponent {
  static propTypes = {
    opened: PropTypes.bool,
    toggle: PropTypes.func,
  }

  settings = {
    disableInlineStyles: true,
  }

  render() {
    const { toggle, opened } = this.props
    return (
      <Headroom {...this.settings}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Link to='/'>
              <img src='//placehold.it/100x100' alt='logo' style={{ maxHeight: '100%' }} />
            </Link>
          </div>
          <div className={styles.right}>
            <Hamburger opened={opened} onClick={toggle} />
          </div>
        </div>
      </Headroom>
    )
  }
}

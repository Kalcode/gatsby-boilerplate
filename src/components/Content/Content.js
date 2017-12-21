import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

import Row from './Row'

export default function Content({ children, relative, padding }) {
  const className = styles[padding]
  return (
    <div className={className}>
      <Row relative={relative}>
        {children}
      </Row>
    </div>
  )
}

Content.propTypes = {
  children: PropTypes.any,
  relative: PropTypes.bool,
  padding: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'xlarge',
  ]),
}

Content.defaultProps = {
  padding: 'medium',
}

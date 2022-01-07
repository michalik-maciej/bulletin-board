import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from './NotFound.module.scss'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ className, children }) {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>NotFound</h2>
      {children}
    </div>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Component.defaultProps = {
  children: null,
  className: '',
}

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const ComponentContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  // ComponentContainer as NotFound,
  Component as NotFoundComponent,
}

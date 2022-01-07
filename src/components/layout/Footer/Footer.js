import { AppBar, Box, Container } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ className, children }) {
  return (
    <AppBar sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth="lg">
        <h2>Footer</h2>
        {children}
      </Container>
    </AppBar>
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
  Component as Footer,
  // ComponentContainer as Footer,
  Component as FooterComponent,
}

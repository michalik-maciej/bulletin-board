import { Container, Paper, Toolbar } from '@mui/material'

import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from './MainLayout.module.scss'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ className, children }) {
  return (
    <Container className={styles.root} sx={{ display: 'flex' }}>
      <Header />
      <Paper className={styles.paper} elevation={2}>
        {children}
      </Paper>
      {/* <Footer /> */}
    </Container>
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
  Component as MainLayout,
  // ComponentContainer as MainLayout,
  Component as MainLayoutComponent,
}

import { Container, Paper } from '@mui/material'

import { Header } from '../Header/Header'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './MainLayout.module.scss'

function Component({ children }) {
  return (
    <Container className={styles.root} sx={{ display: 'flex' }}>
      <Header />
      <Paper className={styles.paper} elevation={2}>
        {children}
      </Paper>
    </Container>
  )
}

Component.propTypes = {
  children: PropTypes.node,
}

Component.defaultProps = {
  children: null,
}

export { Component as MainLayout, Component as MainLayoutComponent }

import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from './Header.module.scss'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ children, className }) {
  return (
    <AppBar className={clsx(className, styles.root)}>
      <Container maxWidth="lg">
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Stack spacing={2} direction="row">
            <Button size="small" variant="contained" color="success">
              User
            </Button>
            <Button size="small" variant="contained" color="success">
              Admin
            </Button>
            <Button size="small" variant="contained" color="success">
              Anonymous
            </Button>
          </Stack>
          <Typography
            component="h2"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            Header
          </Typography>
          <Stack spacing={2} direction="row">
            <Button size="small" variant="contained" color="success">
              My posts
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              href="http://google.com"
              target="_blank"
            >
              Sign in
            </Button>
          </Stack>
        </Toolbar>
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

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
}

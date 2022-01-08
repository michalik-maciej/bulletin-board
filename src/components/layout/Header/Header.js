import {
  AppBar,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import PropTypes from 'prop-types'
import { changeUser } from '../../../redux/userRedux'
import clsx from 'clsx'
import styles from './Header.module.scss'

function Component({ children, className, toggle }) {
  const isLoggedIn = useSelector((state) => state.user.logged)

  const [userLogged, setUserLogged] = useState(isLoggedIn)

  function handleLogin(bool) {
    toggle(bool)
  }

  const buttons = {
    isLogged: (
      <>
        <Button size="small" variant="contained" color="success">
          My posts
        </Button>
        <Button
          variant="contained"
          size="small"
          color="success"
          /*           href="http://google.com"
          target="_blank" */
          onClick={() => handleLogin(false)}
        >
          Log out
        </Button>
      </>
    ),
    isNotLogged: (
      <Button
        variant="contained"
        size="small"
        color="success"
        /*         href="http://google.com"
        target="_blank" */
        onClick={() => handleLogin(true)}
      >
        Log in
      </Button>
    ),
  }

  return (
    <AppBar className={clsx(className, styles.root)}>
      <Toolbar>
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
              {buttons.isLogged}
              {buttons.isNotLogged}
              {/* {userLogged ? buttons.isLogged : buttons.isNotLogged} */}
            </Stack>
          </Toolbar>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.func.isRequired,
}

Component.defaultProps = {
  children: null,
  className: '',
}

const mapDispatchToProps = (dispatch) => ({
  toggle: (payload) => dispatch(changeUser(payload)),
})

const ComponentContainer = connect(null, mapDispatchToProps)(Component)

export { ComponentContainer as Header, Component as HeaderComponent }

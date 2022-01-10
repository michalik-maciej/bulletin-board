import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PropTypes from 'prop-types'
import { changeUser } from '../../../redux/userRedux'
import clsx from 'clsx'
import styles from './Header.module.scss'
import { useTheme } from '@mui/styles'

function Component({ children, className, toggle }) {
  // const isLoggedIn = useSelector((state) => state.user.logged)
  const theme = useTheme()
  const [userLogged, setUserLogged] = useState(true)

  function handleLogin(bool) {
    toggle(bool)
  }

  const headerButton = ({ action = null, caption }) => (
    <Button
      size="small"
      variant="contained"
      sx={{ backgroundColor: theme.palette.primary.light }}
      onClick={action}
    >
      {caption}
    </Button>
  )

  const buttons = {
    isLogged: (
      <>
        {headerButton({ caption: 'My posts' })}
        {headerButton({ caption: 'Log out', action: () => handleLogin(false) })}
      </>
    ),
    isNotLogged: (
      <>
        {headerButton({ caption: 'Log out', action: () => handleLogin(true) })}
      </>
    ),
  }

  return (
    <AppBar className={clsx(className, styles.root)}>
      <Toolbar>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            {/*             <Stack spacing={2} direction="row">
              <Button size="small" variant="contained" color="success">
                User
              </Button>
              <Button size="small" variant="contained" color="success">
                Admin
              </Button>
              <Button size="small" variant="contained" color="success">
                Anonymous
              </Button>
            </Stack> */}
            <IconButton
              href="/"
              aria-label="back to homepage"
              size="large"
              sx={{ color: theme.palette.primary.contrastText }}
            >
              <HomeOutlinedIcon fontSize="inherit" />
            </IconButton>
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

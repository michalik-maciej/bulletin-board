import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { changeUser, isLogged } from '../../../redux/userRedux'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import styles from './Header.module.scss'
import { useTheme } from '@mui/styles'

function Component({ children, className, toggleLogin, isLoggedIn }) {
  const theme = useTheme()

  const handleLogin = ({ event, bool }) => {
    event.preventDefault()
    toggleLogin(bool)
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
        {headerButton({
          caption: 'Log out',
          action: (event) => handleLogin({ event, bool: false }),
        })}
      </>
    ),
    isNotLogged: (
      <>
        {headerButton({
          caption: 'Log in',
          action: (event) => handleLogin({ event, bool: true }),
        })}
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
            <Link to="/">
              <IconButton
                aria-label="back to homepage"
                size="large"
                sx={{ color: theme.palette.primary.contrastText }}
              >
                <HomeOutlinedIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <Stack spacing={2} direction="row">
              {isLoggedIn ? buttons.isLogged : buttons.isNotLogged}
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
  toggleLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
}

Component.defaultProps = {
  children: null,
  className: '',
  isLoggedIn: false,
}

const mapStateToProps = (state) => ({
  isLoggedIn: isLogged(state),
})

const mapDispatchToProps = (dispatch) => ({
  toggleLogin: (payload) => dispatch(changeUser(payload)),
})

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export { ComponentContainer as Header, Component as HeaderComponent }

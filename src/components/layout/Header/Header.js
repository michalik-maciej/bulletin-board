import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { changeUser, getUserId } from '../../../redux/userRedux'
import { filterPostsByAuthor, getShouldFilter } from '../../../redux/postsRedux'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { useTheme } from '@mui/material/styles'

function Component({ toggleLogin, userId, filterPosts, shouldFilter }) {
  const theme = useTheme()

  const handleLogin = ({ event, bool }) => {
    event.preventDefault()
    filterPosts(false)
    toggleLogin(bool)
  }

  const handlePostFilter = ({ event }) => {
    event.preventDefault()
    filterPosts(!shouldFilter)
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

  let buttons
  if (userId) {
    buttons = (
      <>
        {headerButton({
          caption: shouldFilter ? 'All posts' : 'My posts',
          action: (event) => handlePostFilter({ event }),
        })}
        {headerButton({
          caption: 'Log out',
          action: (event) => handleLogin({ event, bool: false }),
        })}
      </>
    )
  } else {
    buttons = (
      <>
        {headerButton({
          caption: 'Log in',
          action: (event) => handleLogin({ event, bool: true }),
        })}
      </>
    )
  }

  return (
    <AppBar>
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
              {buttons}
            </Stack>
          </Toolbar>
        </Container>
      </Toolbar>
    </AppBar>
  )
}

Component.propTypes = {
  filterPosts: PropTypes.func.isRequired,
  toggleLogin: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  shouldFilter: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  shouldFilter: getShouldFilter(state),
  userId: getUserId(state),
})

const mapDispatchToProps = (dispatch) => ({
  filterPosts: (payload) => dispatch(filterPostsByAuthor(payload)),
  toggleLogin: (payload) => dispatch(changeUser(payload)),
})

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export { ComponentContainer as Header, Component as HeaderComponent }

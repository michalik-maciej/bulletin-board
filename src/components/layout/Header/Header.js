import {
  AppBar,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
} from '@mui/material'
import { filterPostsByAuthor, getShouldFilter } from '../../../redux/postsRedux'
import { useDispatch, useSelector } from 'react-redux'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Link } from 'react-router-dom'
import React from 'react'
import { api } from '../../../settings'
import { getUserId } from '../../../redux/userRedux'
import { useTheme } from '@mui/material/styles'

function Component() {
  const theme = useTheme()
  const dispatch = useDispatch()
  const filterPosts = (payload) => dispatch(filterPostsByAuthor(payload))
  // const handleLogin = (payload) => dispatch(fetchUser(payload))
  const userId = useSelector((state) => getUserId(state))
  const shouldFilter = useSelector((state) => getShouldFilter(state))

  const handlePostFilter = ({ event }) => {
    event.preventDefault()
    filterPosts(!shouldFilter)
  }

  const handleLogin = () => {
    // Authenticate using via passport api in the backend
    // Open Google login page
    window.open(`${api.url}/${api.endpoints.authGoogle}`, '_self')
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
          action: () => handleLogin(),
        })}
      </>
    )
  } else {
    buttons = (
      <>
        {headerButton({
          caption: 'Log in',
          action: () => handleLogin(),
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

export { Component as Header, Component as HeaderComponent }

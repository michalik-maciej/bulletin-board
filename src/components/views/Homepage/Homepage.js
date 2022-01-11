import {
  Box,
  Button,
  Card,
  CardActionArea,
  Toolbar,
  Typography,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { CustomAlert } from '../../common/CustomAlert/CustomAlert'
import PropTypes from 'prop-types'
import { getAll } from '../../../redux/postsRedux'
import { isLogged } from '../../../redux/userRedux'

function Component({ children, isLoggedIn, posts }) {
  // const posts = useSelector((state) => state.posts.data)

  return (
    <>
      <CustomAlert />
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <h2>Homepage</h2>
        {isLoggedIn ? (
          <Button
            component={Link}
            to="/post/add"
            size="small"
            variant="outlined"
          >
            Add new post
          </Button>
        ) : null}
      </Toolbar>
      {posts.map((post) => (
        <Card
          key={post.id}
          raised
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <CardActionArea component={Link} to={`post/${post.id}`}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" p={2}>
                {post.title}
              </Typography>
              {post.price ? (
                <Typography variant="h6" p={2}>
                  {post.price} pln
                </Typography>
              ) : null}
            </Box>
          </CardActionArea>
        </Card>
      ))}
      {children}
    </>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})),
}

Component.defaultProps = {
  children: null,
  posts: [{}],
}

const mapStateToProps = (state) => ({
  posts: getAll(state),
  isLoggedIn: isLogged(state),
})

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps)(Component)

export { ComponentContainer as Homepage, Component as HomepageComponent }

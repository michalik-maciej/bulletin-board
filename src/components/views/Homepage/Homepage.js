import {
  Box,
  Button,
  Card,
  CardActionArea,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getUser } from '../../../redux/userRedux'
import styles from './Homepage.module.scss'

function Component({ className, children, isLoggedIn }) {
  const posts = useSelector((state) => state.posts.data)

  return (
    <>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <h2>Homepage</h2>
        {isLoggedIn ? (
          <Button href="/post/add" size="small" variant="outlined">
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
  className: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
}

Component.defaultProps = {
  children: null,
  className: '',
}

const mapStateToProps = (state) => ({
  isLoggedIn: getUser(state),
})

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ComponentContainer = connect(mapStateToProps)(Component)

export { ComponentContainer as Homepage, Component as HomepageComponent }

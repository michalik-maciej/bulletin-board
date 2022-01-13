import { Button, Toolbar } from '@mui/material'
import { getAll, getShouldFilter } from '../../../redux/postsRedux'

import { Link } from 'react-router-dom'
import { PostSummary } from '../../features/PostSummary/PostSummary'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { getUserId } from '../../../redux/userRedux'

function Component({ posts, userId, shouldFilter }) {
  const content = {
    title: 'All posts',
    buttonPostAdd: { caption: 'Add new post', display: 'none' },
    posts: shouldFilter
      ? posts.filter((post) => post.author.id === userId)
      : posts,
  }

  if (userId) {
    if (shouldFilter) {
      content.title = 'My posts'
    }
    content.buttonPostAdd.display = 'block'
  }

  return (
    <>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <h2>{content.title}</h2>
        <Button
          component={Link}
          to="/post/add"
          size="small"
          variant="outlined"
          sx={{ display: content.buttonPostAdd.display }}
        >
          {content.buttonPostAdd.caption}
        </Button>
      </Toolbar>
      {content.posts.map((post) => (
        <PostSummary key={post.id} post={post} />
      ))}
    </>
  )
}

Component.propTypes = {
  userId: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})),
  shouldFilter: PropTypes.bool.isRequired,
}

Component.defaultProps = {
  posts: [{}],
}

const mapStateToProps = (state) => ({
  posts: getAll(state),
  userId: getUserId(state),
  shouldFilter: getShouldFilter(state),
})

const ComponentContainer = connect(mapStateToProps)(Component)

export { ComponentContainer as Homepage, Component as HomepageComponent }

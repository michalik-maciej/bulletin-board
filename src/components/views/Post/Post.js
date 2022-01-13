import { getIsAdmin, getUserId } from '../../../redux/userRedux'

import { PostContent } from './PostContent'
import { PostControl } from './PostControl'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { getPostById } from '../../../redux/postsRedux'
import { withRouter } from '../../../utils/utils'

function Component({ post, userId, isAdmin }) {
  let postControl = null

  if (isAdmin || post.author.id === userId)
    postControl = <PostControl post={post} />

  return (
    <>
      <PostContent post={post} />
      {postControl}
    </>
  )
}

Component.propTypes = {
  post: PropTypes.shape({ author: PropTypes.shape({ id: PropTypes.string }) })
    .isRequired,
  userId: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
}

const mapStateToProps = (state, { router }) => ({
  post: getPostById(state, router.params.id),
  userId: getUserId(state),
  isAdmin: getIsAdmin(state),
})

const ComponentContainer = withRouter(connect(mapStateToProps)(Component))

export { ComponentContainer as Post, Component as PostComponent }

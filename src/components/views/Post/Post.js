import { connect, useSelector } from 'react-redux'

import { PostContent } from './PostContent'
import { PostControl } from './PostControl'
import PropTypes from 'prop-types'
import React from 'react'
import { getPostById } from '../../../redux/postsRedux'
import { withRouter } from '../../../utils/utils'

function Component({ post }) {
  // const { id } = useParams()
  // const post = useSelector((state) => getPostById(state, id))

  return (
    <>
      <PostContent post={post} />
      <PostControl post={post} />
    </>
  )
}

Component.propTypes = {
  post: PropTypes.shape({}).isRequired,
}

const mapStateToProps = (state, { router }) => ({
  post: getPostById(state, router.params.id),
})

const ComponentContainer = withRouter(connect(mapStateToProps)(Component))

export { ComponentContainer as Post, Component as PostComponent }

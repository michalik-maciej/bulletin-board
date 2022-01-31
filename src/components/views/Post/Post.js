import React, { useEffect } from 'react'
import {
  fetchPostById,
  getCurrentPost,
  getLoadingState,
} from '../../../redux/postsRedux'
import { getIsAdmin, getUserId } from '../../../redux/userRedux'
import { useDispatch, useSelector } from 'react-redux'

import { PostContent } from './PostContent'
import { PostControl } from './PostControl'
import { useParams } from 'react-router-dom'

function Component() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const loadingState = useSelector((state) => getLoadingState(state))
  const post = useSelector((state) => getCurrentPost(state))
  const userId = useSelector((state) => getUserId(state))
  const isAdmin = useSelector((state) => getIsAdmin(state))

  useEffect(() => {
    dispatch(fetchPostById(id))
  }, [id])

  return (
    <>
      {post && <PostContent post={post} />}
      {post && (isAdmin || post.author._id === userId) && (
        <PostControl postId={id} />
      )}
    </>
  )
}

export { Component as Post, Component as PostComponent }

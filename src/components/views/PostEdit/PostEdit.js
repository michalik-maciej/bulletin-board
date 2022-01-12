import { getPostById, updatePost } from '../../../redux/postsRedux'
import { useDispatch, useSelector } from 'react-redux'

import { PostForm } from '../../features/PostForm/PostForm'
import React from 'react'
import { useParams } from 'react-router-dom'

function Component() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector((state) => getPostById(state, id))
  const editPost = (payload) => dispatch(updatePost(payload))
  const sendForm = (formData) => {
    editPost({
      ...formData,
      id,
    })
  }

  return (
    <>
      <h2>Edit post</h2>
      <PostForm sendForm={sendForm} post={post} />
    </>
  )
}

export { Component as PostEdit, Component as PostEditComponent }

import { useDispatch, useSelector } from 'react-redux'

import { PostForm } from '../../features/PostForm/PostForm'
import React from 'react'
import { getUserId } from '../../../redux/userRedux'
import { requestAddPost } from '../../../redux/postsRedux'
import styles from './PostAdd.module.scss'

function Component() {
  const userId = useSelector((state) => getUserId(state))
  const dispatch = useDispatch()
  const addNewPost = (payload) => dispatch(requestAddPost(payload))

  const sendForm = (formData) => {
    addNewPost({
      ...formData,
      author: { _id: userId },
      publicationDate: formData.lastUpdate,
    })
  }

  return (
    <div className={styles.root}>
      <h2>Add post</h2>
      <PostForm sendForm={sendForm} />
    </div>
  )
}

export { Component as PostAdd, Component as PostAddComponent }

import { PostForm } from '../../features/PostForm/PostForm'
import PropTypes from 'prop-types'
import React from 'react'
import { addPost } from '../../../redux/postsRedux'
import { connect } from 'react-redux'
import { getUserId } from '../../../redux/userRedux'
import shortid from 'shortid'
import styles from './PostAdd.module.scss'

function Component({ addNewPost, userId }) {
  const sendForm = (formData) => {
    addNewPost({
      ...formData,
      id: shortid(),
      author: { id: userId },
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

Component.propTypes = {
  addNewPost: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  userId: getUserId(state),
})

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (payload) => dispatch(addPost(payload)),
})

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export { ComponentContainer as PostAdd, Component as PostAddComponent }

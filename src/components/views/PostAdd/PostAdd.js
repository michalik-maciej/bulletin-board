import { PostForm } from '../../features/PostForm/PostForm'
import PropTypes from 'prop-types'
import React from 'react'
import { addPost } from '../../../redux/postsRedux'
import clsx from 'clsx'
import { connect } from 'react-redux'
import shortid from 'shortid'
import styles from './PostAdd.module.scss'

function Component({ className, addNewPost }) {
  const sendForm = (formData) => {
    addNewPost({
      ...formData,
      id: shortid(),
      publicationDate: formData.lastUpdate,
    })
  }

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Add post</h2>
      <PostForm sendForm={sendForm} />
    </div>
  )
}

Component.propTypes = {
  className: PropTypes.string,
  addNewPost: PropTypes.func.isRequired,
}

Component.defaultProps = {
  className: '',
}

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (payload) => dispatch(addPost(payload)),
})

const ComponentContainer = connect(null, mapDispatchToProps)(Component)

export { ComponentContainer as PostAdd, Component as PostAddComponent }

import { Paper } from '@mui/material'
import { Post } from '../Post/Post'
import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { getAll } from '../../../redux/postsRedux'
import styles from './Homepage.module.scss'

function Component({ className, children, posts }) {
  return (
    <Paper className={styles.root} elevation={2}>
      <h2>Homepage</h2>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
      {children}
    </Paper>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.object),
}

Component.defaultProps = {
  children: null,
  className: '',
  posts: [{}],
}

const mapStateToProps = (state) => ({
  posts: getAll(state),
})

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component)

export { Container as Homepage, Component as HomepageComponent }

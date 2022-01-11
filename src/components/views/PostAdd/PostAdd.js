import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { addPost } from '../../../redux/postsRedux'
import clsx from 'clsx'
import { connect } from 'react-redux'
import { formatDate } from '../../../utils/utils'
import { getUserData } from '../../../redux/userRedux'
import shortid from 'shortid'
import styles from './PostAdd.module.scss'

function Component({ className, children, addNewPost, userData }) {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [price, setPrice] = useState()
  const [location, setLocation] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    const today = formatDate.DDMMYYYY(new Date())
    console.log(event.target.id)
    addNewPost({
      id: shortid(),
      title,
      content,
      publicationDate: today,
      lastUpdate: today,
      author: userData.id,
      status: event.target.id,
      price,
      location,
    })
  }

  return (
    <div className={clsx(className, styles.root)}>
      <h2>Add post</h2>
      <Box
        component="form"
        noValidate
        className={styles.form}
        // onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              label="Post title"
              fullWidth
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              label="Post content"
              fullWidth
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Price"
              fullWidth
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Location"
              fullWidth
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained" id="draft">
              Save draft
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} variant="contained" id="published">
              Publish
            </Button>
          </Grid>
        </Grid>
      </Box>
      {children}
    </div>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addNewPost: PropTypes.func.isRequired,
  userData: PropTypes.shape({ id: PropTypes.string }).isRequired,
}

Component.defaultProps = {
  children: null,
  className: '',
}

const mapStateToProps = (state) => ({
  userData: getUserData(state),
})

const mapDispatchToProps = (dispatch) => ({
  addNewPost: (payload) => dispatch(addPost(payload)),
})

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)

export { ComponentContainer as PostAdd, Component as PostAddComponent }

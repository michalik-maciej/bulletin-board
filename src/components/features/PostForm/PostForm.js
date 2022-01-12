import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { formatDate } from '../../../utils/utils'
import styles from './PostForm.module.scss'

function Component({ post, sendForm }) {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [price, setPrice] = useState()
  const [location, setLocation] = useState()

  const fields = [
    {
      label: 'Post title',
      value: post.title,
      action: setTitle,
      required: true,
    },
    {
      label: 'Post content',
      value: post.content,
      action: setContent,
      required: true,
    },
    { label: 'Price', value: post.price, action: setPrice, required: false },
    {
      label: 'Location',
      value: post.location,
      action: setLocation,
      required: false,
    },
  ]

  const handleSubmit = (event) => {
    event.preventDefault()
    const { author, id, publicationDate } = post
    const today = formatDate.DDMMYYYY(new Date())
    sendForm({
      id,
      publicationDate,
      title,
      content,
      price,
      location,
      author,
      lastUpdate: today,
      status: event.target.id,
    })
  }

  const generatePostField = ({ label, action, value, required }) => (
    <Grid key={label} item xs={12}>
      <TextField
        required={required}
        label={label}
        fullWidth
        value={value}
        onChange={(e) => action(e.target.value)}
      />
    </Grid>
  )

  return (
    <Box component="form" noValidate className={styles.root}>
      <Grid container spacing={2}>
        {fields.map((field) =>
          generatePostField({
            label: field.label,
            action: field.action,
            required: field.required,
          })
        )}
        <Grid item>
          <Button onClick={handleSubmit} variant="outlined" id="draft">
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
  )
}

Component.propTypes = {
  sendForm: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string,
    }).isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
}

export { Component as PostForm, Component as PostFormComponent }

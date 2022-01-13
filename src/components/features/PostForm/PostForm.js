import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

import { CustomAlert } from '../../common/CustomAlert/CustomAlert'
import PropTypes from 'prop-types'
import { formatDate } from '../../../utils/utils'
import styles from './PostForm.module.scss'
import { useNavigate } from 'react-router-dom'

function Component({ post, sendForm }) {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [price, setPrice] = useState(post.price)
  const [location, setLocation] = useState(post.location)
  const [prevAction, setPrevAction] = useState('')
  const navigate = useNavigate()

  const fields = [
    {
      label: 'Post title',
      value: title,
      action: setTitle,
      required: true,
    },
    {
      label: 'Post content',
      value: content,
      action: setContent,
      required: true,
    },
    { label: 'Price', value: price, action: setPrice, required: false },
    {
      label: 'Location',
      value: location,
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
    setPrevAction(event.target.id)
    // navigate(-1)
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
            value: field.value,
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
      <CustomAlert message={prevAction} />
    </Box>
  )
}

Component.propTypes = {
  sendForm: PropTypes.func.isRequired,
  post: PropTypes.shape({
    author: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
    id: PropTypes.string,
    content: PropTypes.string,
    lastUpdate: PropTypes.string,
    publicationDate: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    location: PropTypes.string,
  }),
}

Component.defaultProps = {
  post: {
    content: '',
    lastUpdate: null,
    publicationDate: null,
    title: '',
    status: null,
    price: '',
    location: '',
  },
}

export { Component as PostForm, Component as PostFormComponent }

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { removePost } from '../../../redux/postsRedux'
import { useDispatch } from 'react-redux'

function Component({ postId }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePost = (event) => {
    event.preventDefault()
    setDialogOpen(false)
    dispatch(removePost(postId))
    navigate('/', { state: { prevAction: 'Post has been removed' } })
  }

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
          component={Link}
          to={`/post/${postId}/edit`}
          variant="outlined"
          id="close"
        >
          Edit
        </Button>
        <Button
          onClick={() => setDialogOpen(true)}
          variant="contained"
          id="close"
        >
          Remove
        </Button>
      </Stack>
      <Dialog
        open={dialogOpen}
        variant="alert"
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle variant="h6">
          Do you want to permanently delete this post?
        </DialogTitle>
        <DialogActions>
          <Button
            color="success"
            variant="outlined"
            onClick={() => setDialogOpen(false)}
          >
            Disagree
          </Button>
          <Button
            color="warning"
            onClick={(event) => handlePost(event)}
            variant="outlined"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

Component.propTypes = {
  postId: PropTypes.string.isRequired,
}

export { Component as PostControl }

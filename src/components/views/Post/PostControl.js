import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Stack,
} from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'
import { removePost } from '../../../redux/postsRedux'
import { useDispatch } from 'react-redux'

function Component({ post }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { state } = useLocation()

  const handlePost = (event) => {
    event.preventDefault()
    setDialogOpen(false)
    dispatch(removePost(post.id))
    navigate('/', { state: { prevAction: 'postRemove' } })
  }

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="disabled" id="close">
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
  post: PropTypes.shape({ id: PropTypes.string }).isRequired,
}

export { Component as PostControl }

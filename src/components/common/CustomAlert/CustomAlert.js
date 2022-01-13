import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

import { PropTypes } from 'prop-types'
import { useLocation } from 'react-router-dom'

function Component({ message }) {
  let { state } = useLocation()
  const [open, setOpen] = useState(!!message)
  // const message = open ? state.prevAction : ''

  const handleClose = () => {
    state = null
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      onClose={handleClose}
      autoHideDuration={50000}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}

Component.propTypes = { message: PropTypes.string }

Component.defaultProps = {
  message: '',
}

export { Component as CustomAlert, Component as CustomAlertComponent }

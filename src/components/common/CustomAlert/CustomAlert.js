import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'

function Component() {
  let { state } = useLocation()
  const [open, setOpen] = useState(!!(state && state.prevAction))

  const handleClose = () => {
    state = null
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
        Post has been removed!
      </Alert>
    </Snackbar>
  )
}

export { Component as CustomAlert, Component as CustomAlertComponent }

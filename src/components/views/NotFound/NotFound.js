import { Link } from '@mui/material'
import React from 'react'

function Component() {
  return (
    <>
      <h2>Page not found</h2>
      <Link href="/" underline="hover">
        Back to homepage
      </Link>
    </>
  )
}

export { Component as NotFound, Component as NotFoundComponent }

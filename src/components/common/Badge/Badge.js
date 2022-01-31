import { Badge } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Badge.module.scss'
import { useTheme } from '@mui/material/styles'

function Component({ children, status }) {
  const theme = useTheme()

  return (
    <Badge
      className={styles.root}
      badgeContent={status}
      color="primary"
      variant="string"
      sx={{
        '& .MuiBadge-badge': {
          transform: 'translate(12px, -50%)',
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      {children}
    </Badge>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  status: PropTypes.string.isRequired,
}

Component.defaultProps = {
  children: null,
}

export { Component as Badge, Component as BadgeComponent }

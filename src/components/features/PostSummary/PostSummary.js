import { Box, Card, CardActionArea, Typography } from '@mui/material'

import { Badge } from '../../common/Badge/Badge'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

function Component({ post }) {
  return (
    <Badge status={post.status}>
      <Card
        raised
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <CardActionArea component={Link} to={`post/${post._id}`}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" p={2}>
              {post.title}
            </Typography>
            {post.price ? (
              <Typography variant="h6" p={2}>
                {post.price} pln
              </Typography>
            ) : null}
          </Box>
        </CardActionArea>
      </Card>
    </Badge>
  )
}

Component.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number,
    status: PropTypes.string.isRequired,
  }).isRequired,
}

export { Component as PostSummary, Component as PostSummaryComponent }

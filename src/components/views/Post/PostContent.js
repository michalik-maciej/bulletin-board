import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import { constants } from '../../../settings'
import styles from './Post.module.scss'
import { useTheme } from '@mui/styles'

function Component({ post }) {
  const theme = useTheme()
  const {
    author,
    content,
    lastUpdate,
    location = null,
    image = constants.imagePlaceholder,
    price,
    publicationDate,
    status,
    title,
  } = post

  return (
    <Badge
      className={styles.status}
      badgeContent={status}
      color="primary"
      variant="string"
    >
      <Card className={styles.root}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h5" p={2}>
                {title}
                <Typography variant="body2" color="text.secondary">
                  {`published ${publicationDate} ${location || ''}`}
                </Typography>
              </Typography>
              {price ? (
                <Typography variant="h5" p={2}>
                  {price} pln
                </Typography>
              ) : null}
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>{content}</CardContent>
            <List className={styles.captions}>
              {Object.entries({
                contact: `${author.email}`,
                updated: lastUpdate,
              }).map(([key, value]) => (
                <ListItem key={key}>
                  <Typography variant="caption">
                    {key}: {value}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <CardMedia component="img" src={image} alt="Post image example" />
          </Grid>
        </Grid>
      </Card>
    </Badge>
  )
}

Component.propTypes = {
  post: PropTypes.shape({
    author: PropTypes.shape({
      email: PropTypes.string.isRequired,
    }).isRequired,
    _id: PropTypes.string.isRequired,
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

export { Component as PostContent }

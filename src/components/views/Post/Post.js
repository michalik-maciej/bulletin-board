import {
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
import clsx from 'clsx'
import { constants } from '../../../settings'
import { getPostById } from '../../../redux/postsRedux'
import styles from './Post.module.scss'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ className, data }) {
  // const { id } = useParams()
  // const post = useSelector((state) => getPostById(state, id))

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
  } = data

  return (
    <Card className={clsx(className, styles.root)}>
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
              <Typography variant="subtitle1" color="text.secondary">
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
              contact: author,
              status,
              updated: lastUpdate,
            }).map(([key, value]) => (
              <ListItem key={key}>
                <Typography variant="caption" display="block">
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
  )
}

Component.propTypes = {
  className: PropTypes.string,
  props: PropTypes.shape({}).isRequired,
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number,
    location: PropTypes.string,
  }).isRequired,
}

Component.defaultProps = {
  className: '',
}

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const ComponentContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // ComponentContainer as Post,
  Component as PostComponent,
}

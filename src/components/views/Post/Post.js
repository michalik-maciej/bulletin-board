import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from './Post.module.scss'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ className, children, data }) {
  const {
    author,
    content,
    lastUpdate,
    location = null,
    price = null,
    publicationDate,
    status,
    title,
  } = data

  return (
    <Card className={clsx(className, styles.root)}>
      <CardHeader
        title={title}
        subheader={`published ${publicationDate}, ${location}`}
      />
      <CardContent>{content}</CardContent>
      <CardContent>
        <List className={styles.captions}>
          {Object.entries({
            status,
            contact: author,
            updated: lastUpdate,
          }).map(([key, value]) => (
            <ListItem key={key}>
              <Typography>
                {key}: {value}
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    lastUpdate: PropTypes.string.isRequired,
    publicationDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.number,
    location: PropTypes.string,
  }).isRequired,
}

Component.defaultProps = {
  children: null,
  className: '',
}

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
}

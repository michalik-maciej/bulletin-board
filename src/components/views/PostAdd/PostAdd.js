import { Box, Button, Grid, Link, TextField, Toolbar } from '@mui/material'

import PropTypes from 'prop-types'
import React from 'react'
import clsx from 'clsx'
import styles from './PostAdd.module.scss'

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

function Component({ className, children }) {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Add post</h2>
      <Box component="form" className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField required label="Post title" fullWidth autoFocus />
          </Grid>
          <Grid item xs={12}>
            <TextField required label="Post content" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Price" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Location" fullWidth />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
              Publish
            </Button>
          </Grid>
        </Grid>
      </Box>
      {children}
    </div>
  )
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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

// const ComponentContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // ComponentContainer as PostAdd,
  Component as PostAddComponent,
}

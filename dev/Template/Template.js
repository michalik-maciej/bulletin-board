import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import styles from './Template.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>Template</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Template,
  // Container as Template,
  Component as TemplateComponent,
};

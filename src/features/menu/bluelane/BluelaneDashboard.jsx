import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BluelaneNavbar from './BluelaneNavbar';
import { Box, Typography } from '@material-ui/core';
import BluelaneList from './BluelaneList';

const mapState = state => {
  return {
    blueitems: state.blueitems
  };
};

class BluelaneDashboard extends Component {
  render() {
    const { blueitems } = this.props;
    return (
      <Fragment>
        <BluelaneNavbar />
        <Box width='100%' bgcolor='error.main' px={2}>
          <Typography variant='h6' style={{ color: 'white' }}>
            Recommended
          </Typography>
        </Box>
        <BluelaneList blueitems={blueitems} />
      </Fragment>
    );
  }
}

export default connect(mapState)(BluelaneDashboard);

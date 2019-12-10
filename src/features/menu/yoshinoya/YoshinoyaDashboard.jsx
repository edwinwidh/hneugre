import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import YoshinoyaList from './YoshinoyaList';
import YoshinoyaNavbar from './YoshinoyaNavbar';
import { Typography, Box } from '@material-ui/core';

const mapState = state => ({
  yoshitems: state.yoshitems
});

class YoshinoyaDashboard extends Component {
  render() {
    const { yoshitems } = this.props;
    return (
      <Fragment>
        <YoshinoyaNavbar />
        <Box width='100%' bgcolor='error.main' px={2}>
          <Typography variant='h6' style={{ color: 'white' }}>
            Recommended
          </Typography>
        </Box>
        <YoshinoyaList yoshitems={yoshitems} />
      </Fragment>
    );
  }
}

export default connect(mapState)(YoshinoyaDashboard);

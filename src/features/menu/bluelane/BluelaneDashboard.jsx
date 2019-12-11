import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import BluelaneNavbar from './BluelaneNavbar';
import { Box, Typography, Grid, Button } from '@material-ui/core';
import BluelaneList from './BluelaneList';
import BluelaneInfoHeader from './BluelaneInfoHeader';
import { Link } from 'react-router-dom';

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
        <BluelaneInfoHeader />
        <Grid container xs justify='center'>
          <Button
            component={Link}
            to='/bluelaneinfo'
            variant='contained'
            color='secondary'
            size='medium'
            style={{ backgroundColor: 'red' }}
          >
            Merchant Info
          </Button>
        </Grid>
        <br />
        <Box width='100%' px={2} style={{backgroundColor: 'red'}}>
          <Typography variant='h6' style={{ color: 'white', padding: '10px' }}>
            Recommended
          </Typography>
        </Box>
        <BluelaneList blueitems={blueitems} />
      </Fragment>
    );
  }
}

export default connect(mapState)(BluelaneDashboard);

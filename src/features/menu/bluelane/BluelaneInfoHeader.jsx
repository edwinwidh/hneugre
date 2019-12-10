import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';

class BluelaneInfoHeader extends Component {
  render() {
    return (
      <Fragment>
        <Grid container xs justify='center'>
          <img
            style={{ width: '100%', maxWidth: '500px' }}
            alt='blue_head'
            src='/assets/bluelane/bluelaneinfo.png'
          />
        </Grid>
      </Fragment>
    );
  }
}

export default BluelaneInfoHeader;

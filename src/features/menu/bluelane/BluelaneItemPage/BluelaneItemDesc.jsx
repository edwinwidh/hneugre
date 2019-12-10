import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

const BluelaneItemDesc = ({ blueitem }) => {
  return (
    <Fragment>
      <Grid container xs={12}>
        <Grid container xs={12} justify='center'>
          <img alt={blueitem.name} src={blueitem.photo} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>{blueitem.name}</Typography>
          <Typography variant='body1' color='textSecondary'>
            {blueitem.description}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default BluelaneItemDesc;

import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

const YoshinoyaItemDesc = ({ yoshitem }) => {
  return (
    <Fragment>
      <Grid container xs={12}>
        <Grid container xs={12} justify='center'>
          <img alt={yoshitem.name} src={yoshitem.photo} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h5'>{yoshitem.name}</Typography>
          <Typography variant='body1' color='textSecondary'>
            {yoshitem.description}
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default YoshinoyaItemDesc;

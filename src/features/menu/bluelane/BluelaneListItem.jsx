import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

class BluelaneListItem extends Component {
  render() {
    const { blueitem } = this.props;
    return (
      <Fragment>
        <Paper>
          <Grid container>
            <ButtonBase component={Link} to={`/bluelane/${blueitem.id}`}>
              <Grid item>
                <img
                  style={{ width: 128, height: 128 }}
                  alt={blueitem.name}
                  src={blueitem.photo}
                />
              </Grid>
              <Grid item xs={12} sm container alignContent='flex-start'>
                <Grid item xs>
                  <Typography variant='subtitle1'>{blueitem.name}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    Rp. {blueitem.price}
                  </Typography>
                </Grid>
              </Grid>
            </ButtonBase>
          </Grid>
        </Paper>
      </Fragment>
    );
  }
}

export default BluelaneListItem;

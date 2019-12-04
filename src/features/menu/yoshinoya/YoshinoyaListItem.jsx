import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper, ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

class YoshinoyaListItem extends Component {
  render() {
    const { yoshitem } = this.props;
    return (
      <Fragment>
        <Paper>
          <Grid container>
            <ButtonBase component={Link} to={`/yoshinoya/${yoshitem.id}`}>
              <Grid item>
                <img
                  style={{ width: 128, height: 128 }}
                  alt={yoshitem.name}
                  src={yoshitem.photo}
                />
              </Grid>
              <Grid item xs={12} sm container alignContent='flex-start'>
                <Grid item xs>
                  <Typography variant='subtitle1'>{yoshitem.name}</Typography>
                  <Typography variant='body2' color='textSecondary'>
                    Rp. {yoshitem.price}
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

export default YoshinoyaListItem;
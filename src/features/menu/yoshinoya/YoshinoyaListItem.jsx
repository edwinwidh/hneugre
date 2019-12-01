import React, { Component, Fragment } from 'react';
import { Typography, Grid, Paper, ButtonBase } from '@material-ui/core';

class YoshinoyaListItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Fragment>
        <Paper>
          <Grid container>
            <ButtonBase>
              <Grid item>
                  <img style={{width: 128, height: 128}} alt={item.name} src={item.photo} />
              </Grid>
              <Grid item xs={8} sm container >
                <Grid item xs>
                    <Typography variant='subtitle1'>
                        {item.name}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        Rp. {item.price}
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

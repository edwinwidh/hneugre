import React, { Fragment } from 'react';
import {
  Grid,
  ButtonBase,
  Typography,
  Paper,
  makeStyles,
  Container
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    background: '#eeeeee',
    margin: theme.spacing(2, 2)
  }
}));

const InboxList = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Grid container>
        <Grid container xs={6} justify='center'>
          <ButtonBase>
            <Typography align='center' color='error' variant='h6'>
              Promo
            </Typography>
          </ButtonBase>
        </Grid>

        <Grid container xs={6} justify='center'>
          <ButtonBase>
            <Typography align='center' color='textSecondary' variant='h6'>
              Pesan
            </Typography>
          </ButtonBase>
        </Grid>
      </Grid>

      <Paper className={classes.root}>
        <Grid container>
          <Grid item>
            <img
              style={{ width: '90px' }}
              alt='blue'
              src='/assets/logo/bluelogo.png'
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6'>Blue Lane Coffee</Typography>
              <Typography variant='body1' color='textSecondary'>
                Buy 1 Get 1
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        <Grid container>
          <Grid item>
            <img
              style={{ width: '90px' }}
              alt='blue'
              src='/assets/logo/yoshilogo.png'
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6'>Yoshinoya Buy 1 Get 1</Typography>
              <Typography variant='body1' color='textSecondary'>
                Yakiniku Beef Bowl
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        <Grid container>
          <Grid item>
            <img
              style={{ width: '90px' }}
              alt='blue'
              src='/assets/logo/adoralogo.png'
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6'>Adoralezat 10% OFF</Typography>
              <Typography variant='body1' color='textSecondary'>
                Bakmi Original S
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        <Grid container>
          <Grid item>
            <img
              style={{ width: '90px' }}
              alt='blue'
              src='/assets/logo/adoralogo.png'
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6'>Adoralezat 25rb Voucher</Typography>
              <Typography variant='body1' color='textSecondary'>
                Min. Pembelian 75rb
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        <Grid container>
          <Grid item>
            <img
              style={{ width: '90px' }}
              alt='blue'
              src='/assets/logo/yoshilogo.png'
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6'>Yoshinoya Buy 1 Get 1</Typography>
              <Typography variant='body1' color='textSecondary'>
                Miso Soup
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default InboxList;

import React from 'react';
import {
  Grid,
  ButtonBase,
  Typography,
  Paper,
  makeStyles,
  Container
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    background: '#eeeeee',
    margin: theme.spacing(2, 0)
  }
}));

const InboxList = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Grid container>
        <Grid
          container
          xs={6}
          justify='center'
          style={{ backgroundColor: 'red' }}
        >
          <ButtonBase>
            <Typography align='center' variant='h6' style={{ color: 'white' }}>
              Promo
            </Typography>
          </ButtonBase>
        </Grid>

        <Grid container xs={6} justify='center'>
          <ButtonBase component={Link} to='/inbox/pesan'>
            <Typography align='center' variant='h6' style={{ color: 'red' }}>
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
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6' style={{ paddingLeft: '10px' }}>
                Blue Lane Coffee
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={{ paddingLeft: '10px' }}
              >
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
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6' style={{ paddingLeft: '10px' }}>
                Yoshinoya Buy 1 Get 1
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={{ paddingLeft: '10px' }}
              >
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
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6' style={{ paddingLeft: '10px' }}>
                Adoralezat 10% OFF
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={{ paddingLeft: '10px' }}
              >
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
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6' style={{ paddingLeft: '10px' }}>
                Adoralezat 25rb Voucher
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={{ paddingLeft: '10px' }}
              >
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
          <Grid item xs sm container alignContent='flex-start'>
            <Grid item xs>
              <Typography variant='h6' style={{ paddingLeft: '10px' }}>
                Yoshinoya Buy 1 Get 1
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={{ paddingLeft: '10px' }}
              >
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

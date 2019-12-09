import React, { Fragment } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    background: '#eeeeee',
    margin: theme.spacing(1)
  },
  rot: {
    padding: theme.spacing(1, 2),
    background: '#000000',
    margin: theme.spacing(1)
  }
}));

const AccountList = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container xs>
        <Grid item xs={6}>
          <Typography
            variant='body1'
            style={{ padding: '10px', fontSize: '20px' }}
          >
            Informasi User
          </Typography>
        </Grid>

        <Grid container xs={6} justify='flex-end'>
          <Link to='/cart' style={{ textDecoration: 'none' }}>
            <Typography
              variant='body1'
              style={{ padding: '10px', fontSize: '20px' }}
              color='error'
            >
              Ganti
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <Grid>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Nama Lengkap
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='body2'>Putri Ayu</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Nomor HP
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='body2'>08123456789</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Email
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant='body2'>putri.ayu@gmail.com</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid>
        <Grid item xs={8}>
          <Typography
            variant='body1'
            style={{ padding: '10px', fontSize: '20px' }}
          >
            Help Center
          </Typography>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                FAQ
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Call Center
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Send Us Feedback
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid>
        <Grid item xs={8}>
          <Typography
            variant='body1'
            style={{ padding: '10px', fontSize: '20px' }}
          >
            App Info
          </Typography>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Terms and Conditions
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                Privacy Policy
              </Typography>
            </Grid>
          </Paper>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container>
              <Typography variant='body2' style={{ fontWeight: 'bold' }}>
                App Version 1.0.0
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
        <br />
      <Grid>
        <Paper className={classes.rot}>
          <Grid container justify='center'>
            <Typography
              variant='body2'
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              Keluar
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default AccountList;

import React, { Fragment } from 'react';
import {
  Container,
  Grid,
  ButtonBase,
  Typography,
  makeStyles,
  Paper
} from '@material-ui/core';
import InboxNavbar from '../InboxNavbar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 1),
    background: '#eeeeee',
    margin: theme.spacing(2, 1)
  },
  rot: {
    padding: theme.spacing(1, 1),
    background: 'red',
    margin: theme.spacing(2, 1)
  }
}));

const InboxMessage = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <InboxNavbar />
      <Container maxWidth='xs'>
        <Grid container>
          <Grid container xs={6} justify='center'>
            <ButtonBase component={Link} to='/inbox'>
              <Typography align='center' variant='h6' style={{ color: 'red' }}>
                Promo
              </Typography>
            </ButtonBase>
          </Grid>

          <Grid
            container
            xs={6}
            justify='center'
            style={{ backgroundColor: 'red' }}
          >
            <ButtonBase>
              <Typography
                align='center'
                variant='h6'
                style={{ color: 'white' }}
              >
                Pesan
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>

        <Paper className={classes.rot}>
          <Grid container>
            <Grid item xs sm container alignContent='flex-start'>
              <Grid item xs>
                <Typography variant='h6' style={{ color: 'white' }}>
                  Judul Pesan
                </Typography>
                <Typography
                  variant='body1'
                  color='textSecondary'
                  style={{ color: 'white' }}
                >
                  Lorem ipsum dolor sit amet, consecte ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs sm container alignContent='flex-start'>
              <Grid item xs>
                <Typography variant='h6'>Judul Pesan</Typography>
                <Typography variant='body1' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consecte ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs sm container alignContent='flex-start'>
              <Grid item xs>
                <Typography variant='h6'>Judul Pesan</Typography>
                <Typography variant='body1' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consecte ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs sm container alignContent='flex-start'>
              <Grid item xs>
                <Typography variant='h6'>Judul Pesan</Typography>
                <Typography variant='body1' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consecte ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs sm container alignContent='flex-start'>
              <Grid item xs>
                <Typography variant='h6'>Judul Pesan</Typography>
                <Typography variant='body1' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consecte ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs sm container alignContent='flex-start'>
              <Grid item xs>
                <Typography variant='h6'>Judul Pesan</Typography>
                <Typography variant='body1' color='textSecondary'>
                  Lorem ipsum dolor sit amet, consecte ...
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default InboxMessage;

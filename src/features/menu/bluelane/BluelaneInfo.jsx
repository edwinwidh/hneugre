import React, { Fragment } from 'react';
import BluelaneNavbar from './BluelaneNavbar';
import BluelaneInfoHeader from './BluelaneInfoHeader';
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Container,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    background: '#0097a7',
    margin: theme.spacing(1)
  }
}));

const BluelaneInfo = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <BluelaneNavbar />
      <BluelaneInfoHeader />
      <br />
      <Container maxWidth='xs'>
        <Grid>
          <Paper className={classes.root}>
            <Grid container justify='center'>
              <Typography
                variant='body1'
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                Lokasi
              </Typography>
            </Grid>
          </Paper>
          <Typography>
            Kino Tower GF, Jl. Jalur Sutera Boulevard No. 1
          </Typography>

          <Grid container xs justify='center'>
            <Button
              variant='contained'
              color='secondary'
              size='small'
              style={{ backgroundColor: 'red' }}
            >
              Buka Google Maps
            </Button>
          </Grid>
          <br />
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container justify='center'>
              <Typography
                variant='body1'
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                Jam Buka
              </Typography>
            </Grid>
          </Paper>

          <Grid container xs justify='center'>
            <Grid container xs justify='flex-end'>
              Senin
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid container xs>
              8:00 - 20:00
            </Grid>
          </Grid>

          <Grid container xs justify='center'>
            <Grid container xs justify='flex-end'>
              Selasa
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid container xs>
              8:00 - 20:00
            </Grid>
          </Grid>
        </Grid>

        <Grid container xs justify='center'>
          <Grid container xs justify='flex-end'>
            Rabu
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container xs>
            8:00 - 20:00
          </Grid>
        </Grid>

        <Grid container xs justify='center'>
          <Grid container xs justify='flex-end'>
            Kamis
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container xs>
            8:00 - 20:00
          </Grid>
        </Grid>

        <Grid container xs justify='center'>
          <Grid container xs justify='flex-end'>
            Jumat
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container xs>
            8:00 - 20:00
          </Grid>
        </Grid>

        <Grid container xs justify='center'>
          <Grid container xs justify='flex-end'>
            Sabtu
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container xs>
            8:00 - 20:00
          </Grid>
        </Grid>

        <Grid container xs justify='center'>
          <Grid container xs justify='flex-end'>
            Minggu
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container xs>
            8:00 - 20:00
          </Grid>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container justify='center'>
              <Typography
                variant='body1'
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                Tentang Merchant
              </Typography>
            </Grid>
          </Paper>
          <Typography>
            Blue Lane Coffee is a new coffee brand in Indonesia. Since its
            inception in 2018, Blue Lane Coffee has aimed to provide consumers
            with good quality, innovative, and affordable beverages served by
            professional and qualified baristas.
          </Typography>
        </Grid>

        <Grid>
          <Paper className={classes.root}>
            <Grid container justify='center'>
              <Typography
                variant='body1'
                style={{ fontWeight: 'bold', color: 'white' }}
              >
                Contact
              </Typography>
            </Grid>
          </Paper>

          <Grid container xs>
            <Grid container xs={3}>
              Phone:
            </Grid>
            <Grid container xs={3}>
              +628127437843
            </Grid>
            <Grid container xs justify='flex-end'>
              <Button
                variant='contained'
                color='secondary'
                size='small'
                style={{ backgroundColor: 'red' }}
              >
                Call Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Fragment>
  );
};

export default BluelaneInfo;

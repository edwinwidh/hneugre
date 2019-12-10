import React, { Fragment } from 'react';
import { Typography, Paper, makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    background: '#f44336',
    margin: theme.spacing(2, 2)
  },
  rot: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 2)
  }
}));

const OrderList = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='xs'>
      <Typography variant='h5' color='error'>
        Active
      </Typography>
      <Link to='/cart' style={{textDecoration: 'none'}}>
        <Paper className={classes.root}>
          <Typography variant='h5' style={{ color: 'white' }}>
            Blue Lane Coffee Kino Tower
          </Typography>
          <Typography variant='p' style={{ color: 'white' }}>
            1 January 2019, 16:35:12 | Bungkus
          </Typography>
        </Paper>
      </Link>
      <Typography variant='h5'>Sejarah Pesanan</Typography>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Blue Lane Coffee Kino Tower</Typography>
        <Typography variant='p'>1 January 2019, 16:35:12 | Bungkus</Typography>
      </Paper>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Bakmi GM Gajah Mada Plaza</Typography>
        <Typography variant='p'>1 January 2019, 16:35:12 | Bungkus</Typography>
      </Paper>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Yoshinoya Hayam Wuruk</Typography>
        <Typography variant='p'>1 January 2019, 16:35:12 | Bungkus</Typography>
      </Paper>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Adora Lezat</Typography>
        <Typography variant='p'>1 January 2019, 16:35:12 | Bungkus</Typography>
      </Paper>
    </Container>
  );
};

export default OrderList;

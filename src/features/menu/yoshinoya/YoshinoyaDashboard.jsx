import React, { Component } from 'react';
import { connect } from 'react-redux';
import YoshinoyaList from './YoshinoyaList';
import YoshinoyaNavbar from './YoshinoyaNavbar';
import {
  Container,
  Grid,
  Typography,
  ButtonBase,
  Box
} from '@material-ui/core';

const mapState = state => ({
  yoshitems: state.yoshitems
});

class YoshinoyaDashboard extends Component {
  render() {
    const { yoshitems } = this.props;
    return (
      <Container>
        <YoshinoyaNavbar />
        <Grid container>
          <Grid container xs={6} justify='center'>
            <ButtonBase>
              <Typography align='center' color='textSecondary' variant='h6'>
                Makan Meja
              </Typography>
            </ButtonBase>
          </Grid>

          <Grid container xs={6} justify='center'>
            <ButtonBase>
              <Typography align='center' color='error' variant='h6'>
                Bungkus
              </Typography>
            </ButtonBase>
          </Grid>
        </Grid>
        <Box width='100%' bgcolor='error.main' px={2}>
          <Typography variant='h6' style={{ color: 'white' }}>
            Recommended
          </Typography>
        </Box>
        <YoshinoyaList yoshitems={yoshitems} />
      </Container>
    );
  }
}

export default connect(mapState)(YoshinoyaDashboard);

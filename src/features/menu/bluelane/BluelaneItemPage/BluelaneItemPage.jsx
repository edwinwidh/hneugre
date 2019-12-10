import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  FormGroup,
  Checkbox,
  TextField
} from '@material-ui/core';
import BluelaneItemDesc from './BluelaneItemDesc';
import BluelaneNavbar from '../BluelaneNavbar';
import BlueButton from './BlueButton';

const mapState = (state, ownProps) => {
  const bluelaneId = ownProps.match.params.id;

  let blueitem = {};

  if (bluelaneId && state.blueitems.length > 0) {
    blueitem = state.blueitems.filter(
      blueitem => blueitem.id === bluelaneId
    )[0];
  }

  return {
    blueitem
  };
};

const BluelaneItemPage = ({ blueitem }) => {
  const [value, setValue] = React.useState('regular');
  const [state, setState] = React.useState({
    buttercroissant: false,
    nutellacake: false,
    espressoshot: false
  });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { buttercroissant, nutellacake, espressoshot } = state;

  return (
    <Fragment>
      <BluelaneNavbar />
      <Container maxWidth='xs'>
        <BluelaneItemDesc blueitem={blueitem} />
        <br />
        <Grid container>
          <Grid item xs={12}>
            <Box width='100%' bgcolor='text.hint' px={2}>
              <Typography variant='h6'>Ukuran</Typography>
            </Box>
            <FormControl component='fieldset'>
              <RadioGroup
                aria-label='ukuran'
                name='ukuran'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='small'
                  control={<Radio />}
                  label='Small'
                />
                <FormControlLabel
                  value='regular'
                  control={<Radio />}
                  label='Regular'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Box width='100%' bgcolor='text.hint' px={2}>
              <Typography variant='h6'>Tambahkan juga:</Typography>
            </Box>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={buttercroissant}
                      onChange={handleCheck('buttercroissant')}
                      value='buttercroissant'
                    />
                  }
                  label='Butter Croissant'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nutellacake}
                      onChange={handleCheck('nutellacake')}
                      value='nutellacake'
                    />
                  }
                  label='Nutella Cake'
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={espressoshot}
                      onChange={handleCheck('espressoshot')}
                      value='espressoshot'
                    />
                  }
                  label='Espresso Shot'
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box width='100%' bgcolor='text.hint' px={2}>
            <Typography variant='h6'>Notes:</Typography>
          </Box>
          <form noValidate autoComplete='off'>
            <div>
              <TextField
                id='notes'
                multiline
                rows='4'
                placeholder='Notes'
                margin='normal'
                variant='outlined'
                style={{ width: '100%' }}
              />
            </div>
          </form>
        </Grid>
        <Grid container xs={12} justify='center'>
          <BlueButton key={blueitem.id} blueitem={blueitem} />
        </Grid>
        <br />
        <br />
        <br />
      </Container>
    </Fragment>
  );
};

export default connect(mapState)(BluelaneItemPage);

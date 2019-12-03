import React from "react";
import { connect } from "react-redux";
import YoshinoyaNavbar from "../YoshinoyaNavbar";
import YoshinoyaItemDesc from "./YoshinoyaItemDesc";
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
  TextField,
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { addToCart } from "../../../cart/cartActions";

const mapState = (state, ownProps) => {
  const yoshitemId = ownProps.match.params.id;

  let yoshitem = {};

  if (yoshitemId && state.yoshitems.length > 0) {
    yoshitem = state.yoshitems.filter(
      yoshitem => yoshitem.id === yoshitemId
    )[0];
  }

  return {
    yoshitem
  };
};

const actions = dispatch => {
  return {
    addToCart: item => {
      dispatch(addToCart(item));
    }
  };
};

const YoshinoyaItemPage = ({ yoshitem }) => {
  const [value, setValue] = React.useState("regular");
  const [state, setState] = React.useState({
    miso: false,
    eggroll: false,
    redchilli: false
  });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleCheck = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { miso, eggroll, redchilli } = state;

  const handleClick = id => {
    this.props.addToCart(id);
  };

  return (
    <Container>
      <YoshinoyaNavbar />
      <YoshinoyaItemDesc yoshitem={yoshitem} />
      <br />
      <Grid container>
        <Grid item xs={12}>
          <Box width="100%" bgcolor="text.hint" px={2}>
            <Typography variant="h6">Ukuran</Typography>
          </Box>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="ukuran"
              name="ukuran"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="regular"
                control={<Radio />}
                label="Regular"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="Large"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box width="100%" bgcolor="text.hint" px={2}>
            <Typography variant="h6">Tambahkan juga:</Typography>
          </Box>
          <FormControl>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={miso}
                    onChange={handleCheck("miso")}
                    value="miso"
                  />
                }
                label="Miso Soup"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={eggroll}
                    onChange={handleCheck("eggroll")}
                    value="eggroll"
                  />
                }
                label="Egg Roll"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={redchilli}
                    onChange={handleCheck("redchilli")}
                    value="redchilli"
                  />
                }
                label="Red Chilli"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box width="100%" bgcolor="text.hint" px={2}>
          <Typography variant="h6">Notes:</Typography>
        </Box>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="notes"
              multiline
              rows="4"
              placeholder="Notes"
              margin="normal"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </div>
        </form>
      </Grid>
      <Grid container xs={12} justify="center">
        <Button
          component={Link}
          to={`/cart`}
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleClick(yoshitem.id)}
        >
          {`Add: Rp.${yoshitem.price}`}
        </Button>
      </Grid>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default connect(mapState, actions)(YoshinoyaItemPage);

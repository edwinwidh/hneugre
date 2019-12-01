import React, { Component, Fragment } from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

class MerchantListItem extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/yoshinoya'>
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image='/assets/yoshi.png'
                title='iklan'
                object-fit
              />
            </CardActionArea>
          </Card>
        </Link>
        <br />
        <Link to='/bluelane'>
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='/assets/blue.png'
              title='iklan'
            />
          </CardActionArea>
        </Card>
        </Link>
        <br />
        <Link to='/adora'>
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image='/assets/adora.png'
              title='iklan'
            />
          </CardActionArea>
        </Card>
        </Link>
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

export default MerchantListItem;

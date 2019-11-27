import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import {
  Restaurant,
  List,
  MailOutline,
  AccountCircle
} from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';
import { classes } from 'istanbul-lib-coverage';

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  }
};

class BottomNav extends Component {
  state = {
    value: 0,
    pathMap: ['/merchant', '/pesanan']
  };

  componentWillReceiveProps(newProps) {
    const { pathName } = newProps.location;
    const { pathMap } = this.state;

    const value = pathMap.indexOf(pathName);

    if (value > -1) {
      this.setState({
        value
      });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, pathMap } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.stickToBottom}
      >
        <BottomNavigationAction
          label='Restoran'
          icon={<Restaurant />}
          as={Link}
          to={pathMap[0]}
        />
        <BottomNavigationAction
          label='Pesanan'
          icon={<List />}
          as={Link}
          to={pathMap[1]}
        />
        <BottomNavigationAction label='Inbox' icon={<MailOutline />} />
        <BottomNavigationAction label='Account' icon={<AccountCircle />} />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);

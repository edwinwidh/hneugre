import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
  Restaurant,
  List,
  MailOutline,
  AccountCircle
} from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

class BottomNav extends Component {
  state = {
    value: 0,
    pathMap: ['/merchant', '/pesanan', '/inbox', '/account']
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
        className={{ width: '100%', position: 'sticky', bottom: '0px' }}
      >
        <BottomNavigationAction
          label='Restoran'
          icon={<Restaurant />}
          component={Link}
          to={pathMap[0]}
        />
        <BottomNavigationAction
          label='Pesanan'
          icon={<List />}
          component={Link}
          to={pathMap[1]}
        />
        <BottomNavigationAction
          label='Inbox'
          icon={<MailOutline />}
          component={Link}
          to={pathMap[2]}
        />
        <BottomNavigationAction
          label='Account'
          icon={<AccountCircle />}
          component={Link}
          to={pathMap[3]}
        />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);

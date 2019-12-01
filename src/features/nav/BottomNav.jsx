import React, { Component, Fragment } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  CssBaseline
} from '@material-ui/core';
import {
  Restaurant,
  List,
  MailOutline,
  AccountCircle
} from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    color: 'grey',
    '&$selected': {
      color: 'red'
    }
  },
  selected: {},
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  }
});

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
    const actionClasses = this.props.classes;
    return (
      <Fragment>
        <CssBaseline />
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={actionClasses.stickToBottom}
        >
          <BottomNavigationAction
            label='Restoran'
            icon={<Restaurant />}
            component={Link}
            to={pathMap[0]}
            classes={actionClasses}
          />
          <BottomNavigationAction
            label='Pesanan'
            icon={<List />}
            component={Link}
            to={pathMap[1]}
            classes={actionClasses}
          />
          <BottomNavigationAction
            label='Inbox'
            icon={<MailOutline />}
            component={Link}
            to={pathMap[2]}
            classes={actionClasses}
          />
          <BottomNavigationAction
            label='Account'
            icon={<AccountCircle />}
            component={Link}
            to={pathMap[3]}
            classes={actionClasses}
          />
        </BottomNavigation>
      </Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(BottomNav));

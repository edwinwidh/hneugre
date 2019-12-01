import React, { Component, Fragment } from 'react';
import AccountList from '../AccountList/AccountList';
import AccountNavbar from '../AccountNavbar';

class AccountDashboard extends Component {
  render() {
    return (
      <Fragment>
        <AccountNavbar />
        <AccountList />
      </Fragment>
    );
  }
}

export default AccountDashboard;

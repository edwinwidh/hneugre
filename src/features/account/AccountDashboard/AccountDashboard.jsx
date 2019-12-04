import React, { Component } from 'react';
import AccountList from '../AccountList/AccountList';
import AccountNavbar from '../AccountNavbar';
import { Container } from '@material-ui/core';

class AccountDashboard extends Component {
  render() {
    return (
      <Container>
        <AccountNavbar />
        <AccountList />
      </Container>
    );
  }
}

export default AccountDashboard;

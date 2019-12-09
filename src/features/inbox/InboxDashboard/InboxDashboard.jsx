import React, { Component } from 'react';
import InboxList from '../InboxList/InboxList';
import InboxNavbar from '../InboxNavbar';
import { Container } from '@material-ui/core';

class InboxDashboard extends Component {
  render() {
    return (
      <Container maxWidth='xs'>
        <InboxNavbar />
        <InboxList />
      </Container>
    );
  }
}

export default InboxDashboard;

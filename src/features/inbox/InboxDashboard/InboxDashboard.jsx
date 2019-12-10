import React, { Component, Fragment } from 'react';
import InboxList from '../InboxList/InboxList';
import InboxNavbar from '../InboxNavbar';

class InboxDashboard extends Component {
  render() {
    return (
      <Fragment>
        <InboxNavbar />
        <InboxList />
      </Fragment>
    );
  }
}

export default InboxDashboard;

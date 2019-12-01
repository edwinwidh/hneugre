import React, { Component } from 'react';
import { connect } from 'react-redux';
import YoshinoyaList from './YoshinoyaList';
import YoshinoyaNavbar from './YoshinoyaNavbar';
import { Container } from '@material-ui/core';

const mapState = state => ({
  yoshitems: state.yoshitems
});

class YoshinoyaDashboard extends Component {
  render() {
    const { yoshitems } = this.props;
    return (
      <Container>
        <YoshinoyaNavbar />
        <YoshinoyaList yoshitems={yoshitems} />
      </Container>
    );
  }
}

export default connect(mapState)(YoshinoyaDashboard);

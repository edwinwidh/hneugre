import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import YoshinoyaList from './YoshinoyaList';
import YoshinoyaNavbar from './YoshinoyaNavbar';

const mapState = state => ({
  yoshitems: state.yoshitems
});

class YoshinoyaDashboard extends Component {
  render() {
      const {yoshitems} = this.props;
    return (
      <Fragment>
        <YoshinoyaNavbar />
        <YoshinoyaList yoshitems={yoshitems} />
      </Fragment>
    );
  }
}

export default connect(mapState)(YoshinoyaDashboard);
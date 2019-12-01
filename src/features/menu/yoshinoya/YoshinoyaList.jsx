import React, { Component, Fragment } from 'react';
import YoshinoyaListItem from './YoshinoyaListItem';

class YoshinoyaList extends Component {
  render() {
    const { yoshitems } = this.props;
    return (
      <Fragment>
        {yoshitems.map(yoshitem => (
          <YoshinoyaListItem key={yoshitem.id} yoshitem={yoshitem} />
        ))}
        <br />
        <br />
        <br />
      </Fragment>
    );
  }
}

export default YoshinoyaList;

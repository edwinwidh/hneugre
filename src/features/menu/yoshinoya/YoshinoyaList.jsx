import React, { Component, Fragment } from 'react'
import YoshinoyaListItem from './YoshinoyaListItem'



class YoshinoyaList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.items.map(item => (
                    <YoshinoyaListItem key={item.id} item={item} />
                ))}
                <br />
                <br />
                <br />
            </Fragment>
        )
    }
}

export default YoshinoyaList
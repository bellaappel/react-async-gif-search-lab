
import React, { Component } from 'react';

export default class GifList extends Component {

    render() {
        return(
            <ul>{this.props.initialGifs.map(gifInfo => <li key={gifInfo.url}><img src={gifInfo.images.original.url} alt={gifInfo.name}/></li>)}</ul>
        )
    }
}
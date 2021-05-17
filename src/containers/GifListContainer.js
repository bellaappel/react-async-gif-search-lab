import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        }
    }
    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=B643n8B89VM1PUAqKLgiyeKKxlxKcu9k&rating=g')
  .then(response => response.json())
  .then(data => this.setState({
      gifs: [data.data[0], data.data[1], data.data[2]]
        }));

    }

    handleSubmit = (event, value) => {
        event.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${value}&api_key=B643n8B89VM1PUAqKLgiyeKKxlxKcu9k&rating=g`)
        .then(response => response.json())
        .then(data => this.setState({
            gifs: [data.data[0], data.data[1], data.data[2]]
              }));
    }

    render() {
        return(
            <div>
                < GifList initialGifs={this.state.gifs} />
                < GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

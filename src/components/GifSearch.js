import React, { Component } from 'react';

export default class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            searchTerm: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render() {
        return(
            <div>
                <form onSubmit={(event) => this.props.handleSubmit(event, this.state.searchTerm)}>
                    <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={(event) => this.handleInputChange(event)}></input>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react';
import axios from 'axios';

class BeerDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {}
    }
  }

  componentDidMount() {

    // API GET request => get beer by Id
    axios.get('/api/beers/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          details: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Beer Details</h3>
        <ul>
          <li>Name: { this.state.details.name }</li>
          <li>Brewery: { this.state.details.brewery }</li>
          <li>Alochol Content: { this.state.details.alcoholContent }</li>
        </ul>
      </div>
    );
  }
}

export default BeerDetails;
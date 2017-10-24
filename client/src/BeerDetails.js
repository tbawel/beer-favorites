import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class BeerDetails extends Component {
  constructor() {
    super();
    this.state = {
      details: {} // details holds all values for a beer (id, name, brewery, alcoholContent)
    }
  }

  componentDidMount() {

    // API GET request => get beer by Id
    axios.get('/api/beers/' + this.props.match.params.id)
      .then((response) => {
        this.setState({ // set state after successful api call
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
        <Link to='/'><button>Back</button></Link>  {/* Adds link back to base url "/" */}
        <Link to={ '/beers/update/' + this.state.details.id }><button>Edit</button></Link>  {/* Adds link to beer update form */}
      </div>
    );
  }
}

export default BeerDetails;
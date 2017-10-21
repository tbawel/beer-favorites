import React, { Component } from 'react';
import axios from 'axios';

class BeerAddForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      brewery: '',
      alcoholContent: 0
    }

    this.onAddBeer = this.onAddBeer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {

    // API GET request => get all beers in database
    axios.get('/api/beers')
      .then((response) => {
        this.setState({
          beers: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Update properties on every key up
   */
  handleInputChange(e) {
    this.setState({     
        [e.target.name]: e.target.value     
    });
  }

  onAddBeer(e) {
    e.preventDefault();
    this.props.onAddBeer(this.state.name, this.state.brewery, this.state.alcoholContent);
  }

  render() {

    return (
      <form onSubmit={ this.onAddBeer }>
        <label id="newBeerName">Name:</label>
        <input id="newBeerName" name="name" type="text" onChange={ this.handleInputChange }/><br/>
        <label id="newBeerBrewery">Brewery:</label>
        <input id="newBeerBrewery" name="brewery" type="text" onChange={ this.handleInputChange }/><br/>
        <label id="newBeerAlcoholContent">Alcohol Content:</label>
        <input id="newBeerAlcoholContent" name="alcoholContent" type="number" onChange={ this.handleInputChangeA }/><br/>
        <button>Add Beer</button>
      </form>
    );
  }
}

export default BeerAddForm;
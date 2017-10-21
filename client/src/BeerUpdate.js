import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      brewery: '',
      alcoholContent: 0
    }
  }

  componentDidMount() {

    // API GET request => get beer by Id
    axios.get('/api/beers/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          brewery: response.data.brewery,
          alcoholContent: response.data.alcoholContent
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

  /* Gets called when user clicks "Update Beer" button
   * via JS native onSubmit form event handler
   */
  updateBeer(e) {
    e.preventDefault(); // prevent default behavior of refreshing page
    

    // UPDATE/PUT API request, 2nd parameter = updated beer object
    axios.put('/api/beers/' + this.props.match.params.id, {
      name: this.refs.name.value, // this.refs accesses ref attributes on form inputs (React feature)
      brewery: this.refs.brewery.value,
      alcoholContent: this.refs.alcoholContent.value
    })
    .then((response) => { // successfull api call = beer updated in mongodb database

    })
    .catch((error) => { 
    	console.log(error);
    });
  }

  /**
   * see https://reactjs.org/docs/forms.html#controlled-components for onChange
   */
  render() {
    return (
      <div>
        <h3>Update Beer</h3>
        <form onSubmit={ (e) => this.updateBeer(e) }>
          <label id="updateBeerName">Name:</label>
          <input id="updateBeerName" value={ this.state.name } name="name" ref="name" type="text" onChange={ (e) => this.handleInputChange(e) }/><br/>
          <label id="updateBeerBrewery">Brewery:</label>
          <input id="updateBeerBrewery" value={ this.state.brewery } name="brewery" ref="brewery" type="text" onChange={ (e) => this.handleInputChange(e) }/><br/>
          <label id="updateBeerAlcoholContent">Alcohol Content:</label>
          <input id="updateBeerAlcoholContent" value={ this.state.alcoholContent } name="alcoholContent" ref="alcoholContent" type="number" onChange={ (e) => this.handleInputChange(e) }/><br/>
          <button>Update Beer</button>
        </form>
        <Link to={ '/beers/' + this.props.match.params.id }> <button>Back</button></Link>
      </div>
    );
  }
}

export default BeerUpdate;
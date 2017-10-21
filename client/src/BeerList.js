import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      name: '',
      brewery: '',
      alcoholContent: 0
    }

    this.addBeer = this.addBeer.bind(this);
    this.handleInputChangeName = this.handleInputChangeName.bind(this);
    this.handleInputChangeBrewery = this.handleInputChangeBrewery.bind(this);
    this.handleInputChangeAlcContent = this.handleInputChangeAlcContent.bind(this);
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

  /* Gets called if user clicks on Delete button
   * via the JS native onClick event handler
   */
  deleteBeer(id) {

    // save remainding beers in variable (array)
    let remaindingBeers = this.state.beers.filter((beer) => {
      if(beer.id !== id) {
        return beer;
      }
    });

    // API Delete request
    axios.delete('/api/beers/' + id)
    .then((response) => {
    	this.setState({ // set state again after successful api call
    		beers: remaindingBeers
    	})
    })
    .catch((error) => {
    	console.log(error);
    });
  }

  /**
   * Update properties on every key up
   */
  handleInputChangeName(e) {
    this.setState({
        
          name: e.target.value
        
    });
  }
  handleInputChangeBrewery(e) {
    this.setState({
        
          brewery: e.target.value
        
    });
  }
  handleInputChangeAlcContent(e) {
    this.setState({
        
          alcoholContent: e.target.value
        
    });
  }

  /* Gets called when user clicks "Add Beer" button
   * via JS native onSubmit form event handler
   */
  addBeer(e) {
    e.preventDefault(); // prevent default behavior of refreshing page

    console.log(this.state);
    // POST API request, 2nd parameter = new beer object
    // axios.post('/api/beers/', {
    //   name: this.state.newBeer.name,
    //   brewery: this.state.newBeer.brewery,
    //   alcoholContent: this.state.newBeer.alcoholContent
    // })
    // .then((response) => { // successfull api call = beer added to mongodb database

    //   let updatedBeers = this.state.beers; // never manipulate state directly => create local variable (updatedBeers)
    //   updatedBeers.push(response.data); // add new beer (response.data) to updatedBeers array

    //   // set state again after successful api call
    // 	this.setState({
    // 		beers: updatedBeers
    // 	})
    // })
    // .catch((error) => { 
    // 	console.log(error);
    // });
  }

  render() {

    let beerItems = this.state.beers.map((beer) => {
      return (
        <li key={beer.id}>
          <Link to={ '/beers/' + beer.id }>{beer.name}</Link>
          <button onClick={ this.deleteBeer.bind(this, beer.id) }>Delete</button>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {beerItems}
        </ul>
        <form onSubmit={ this.addBeer }>
          <label id="newBeerName">Name:</label>
          <input id="newBeerName" name="name" type="text" onChange={ this.handleInputChangeName }/><br/>
          <label id="newBeerBrewery">Brewery:</label>
          <input id="newBeerBrewery" name="brewery" type="text" onChange={ this.handleInputChangeBrewery }/><br/>
          <label id="newBeerAlcoholContent">Alcohol Content:</label>
          <input id="newBeerAlcoholContent" name="alcoholContent" type="number" onChange={ this.handleInputChangeAlcContent }/><br/>
          <button>Add Beer</button>
        </form>
      </div>
    );
  }
}

export default BeerList;
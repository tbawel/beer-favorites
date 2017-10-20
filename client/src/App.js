import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }
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

  /* Gets called when user clicks "Add Beer" button
   * via JS native onSubmit form event handler
   */
  addBeer(e) {
    e.preventDefault(); // prevent default behavior of refreshing page

    // POST API request, 2nd parameter = new beer object
    axios.post('/api/beers/', {
      name: this.refs.name.value, // this.refs accesses ref attributes on form inputs (React feature)
      brewery: this.refs.brewery.value,
      alcoholContent: this.refs.alcoholContent.value
    })
    .then((response) => { // successfull api call = beer added to mongodb database

      let updatedBeers = this.state.beers; // never manipulate state directly => create local variable (updatedBeers)
      updatedBeers.push(response.data); // add new beer (response.data) to updatedBeers array

      // set state again after successful api call
    	this.setState({
    		beers: updatedBeers
    	})
    })
    .catch((error) => { 
    	console.log(error);
    });
  }

  render() {

    let beerItems = this.state.beers.map((beer) => {
      return (
        <li key={beer.id}>
          {beer.name}
          {/* <button onClick={ this.deleteBeer.bind(this, beer.id) }>Delete</button> */}
          <button onClick={ (e) => this.deleteBeer(beer.id, e) }>Delete</button>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {beerItems}
        </ul>
        <form onSubmit={ (e) => this.addBeer(e) }>
          <label id="newBeerName">Name:</label>
          <input id="newBeerName" ref="name" name="name" type="text"/><br/>
          <label id="newBeerBrewery">Brewery:</label>
          <input id="newBeerBrewery" ref="brewery" name="brewery" type="text"/><br/>
          <label id="newBeerAlcoholContent">Alcohol Content:</label>
          <input id="newBeerAlcoholContent" ref="alcoholContent" name="alcoholContent" type="number"/><br/>
          <button>Add Beer</button>
        </form>
      </div>
    );
  }
}

export default App;

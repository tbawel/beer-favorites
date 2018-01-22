import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import BeerAdd from './BeerAdd';

class BeerList extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    }

    this.addBeer = this.addBeer.bind(this);
  }

  componentDidMount() {

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

  /** Gets called if user clicks on Delete button
   * via the JS native onClick event handler
   */
  deleteBeer(id) {

    // save remainding beers in variable (array)
    let remaindingBeers = [];
    this.state.beers.forEach((beer) => {
      if(beer.id !== id) {
        remaindingBeers.push(beer);
      }
    });

    let accessToken = localStorage.getItem('beerFavsAT');
    if( accessToken ) {
      // API Delete request
      axios.delete('/api/beers/' + id + '?access_token=' + accessToken)
      .then((response) => {
        this.setState({ // set state after successful api call
          beers: remaindingBeers
        })
      })
      .catch((error) => {
        alert('Sorry, could not delete beer! ' + error)
      });
    }
    else {
      alert('Sorry, login first to delete a beer!')
    }
  }

  /** 
   * Gets called when user clicks "Add Beer" button
   * via JS native onSubmit form event handler
   * 
   * Since this method needs data from the 
   * child component "BeerAddForm", it is passed down to
   * that child component via the property "onAddBeer"
   */
  addBeer(newName, newBrewery, newAlcoholContent) {

    let accessToken = localStorage.getItem('beerFavsAT');
    if( accessToken ) {
      // POST API request, 2nd parameter = new beer object
      axios.post('/api/beers/?access_token=' + accessToken, {
        name: newName,
        brewery: newBrewery,
        alcoholContent: newAlcoholContent
      })
      .then((response) => { // successfull api call = beer added to mongodb database
        let updatedBeers = this.state.beers; // never manipulate state directly => create local variable (updatedBeers)
        updatedBeers.push(response.data); // add new beer (response.data) to updatedBeers array

        // set state after successful api call
        this.setState({
          beers: updatedBeers
        })
      })
      .catch((error) => { 
        alert('Sorry, could not add beer! ' + error)
      });
    }
    else {
      alert('Sorry, login first to create a beer!')
    }
  }

  render() {

    let beerItems = this.state.beers.map((beer) => {
      return (
        <li key={beer.id}>
          <Link to={'/beers/' + beer.id }>{beer.name}, {beer.brewery}</Link> {/* Adds link to beer detail views */}
          <button onClick={ this.deleteBeer.bind(this, beer.id) } className="btn btn-success">Delete</button>
        </li>
      )
    });

    return (
      <div>
        <ul>
          {beerItems} {/* Renders <li>'s from line 88-91 */}
        </ul>
        {/* 
          Child component "BeerAddForm" which passes down
          the "addBeer" method of this component (parent)
          with the help of an attribute "onAddBeer" 
        */}
        <BeerAdd onAddBeer={ this.addBeer }/> 
      </div>
    );
  }
}

export default BeerList;
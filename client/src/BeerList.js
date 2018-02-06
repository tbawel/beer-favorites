import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeerAdd from './BeerAdd';

class BeerList extends Component {
  constructor(props) {
    super(props);
  }

  /** Gets called if user clicks on Delete button
   * via the JS native onClick event handler
   */
  deleteBeer(id) {

  }

  render() {

    let beerItems = this.props.beers.map((beer) => {
      return (
        <li key={beer.id}>
          <Link to={'/beers/' + beer.id } beer={beer}>{beer.name}, {beer.brewery}</Link> {/* Adds link to beer detail views */}
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
        <BeerAdd action={ this.props.action }/> 
      </div>
    );
  }
}

export default BeerList;
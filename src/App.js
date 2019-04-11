import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleDelete = (beerId, e) => {
    e.preventDefault();
    const updatedBeerlist = this.props.beers.filter(beer => beer.id !== beerId);
    this.props.beers = updatedBeerlist; // PROPS ARE READ-ONLY...WHAT NOW?!?
  };

  render() {
    const beersList = this.props.beers.map(beer => (
      <li key={beer.id}>
        {beer.name}{" "}
        <a href="/" onClick={e => this.handleDelete(beer.id, e)}>
          Delete
        </a>
      </li>
    ));
    return (
      <div>
        <h1>Georgie's Beer Favorites</h1>
        <ul>{beersList}</ul>
      </div>
    );
  }
}

export default App;

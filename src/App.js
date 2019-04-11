import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const beersList = this.props.beers.map(beer => (
      <li key={beer.id}>
        {beer.name} <a href="/">Delete</a>
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

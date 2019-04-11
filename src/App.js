import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleDelete = e => {
    e.preventDefault();
    // console.log('Delete Beer')
  };

  render() {
    const beersList = this.props.beers.map(beer => (
      <li key={beer.id}>
        {beer.name}{" "}
        <a href="/" onClick={this.handleDelete}>
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

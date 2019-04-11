import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          id: 0,
          name: "Choco Stout"
        },
        {
          id: 1,
          name: "Blonde White"
        },
        {
          id: 2,
          name: "Thunder Monkey"
        }
      ]
    };
  }

  handleDelete = (beerId, e) => {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.filter(beer => beer.id !== beerId);
    this.setState({
      beers: updatedBeerlist
    });
  };

  render() {
    const beersList = this.state.beers.map(beer => (
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

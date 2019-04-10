import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: ["Choco Stout", "Blonde White", "Thunder Monkey"]
    };
  }

  render() {
    const beersList = this.state.beers.map(beer => <li>{beer}</li>);
    return (
      <div>
        <h1>Georgie's Beer Favorites</h1>
        <ul>{beersList}</ul>
      </div>
    );
  }
}

export default App;

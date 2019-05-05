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
      ],
      newBeerCounter: 3,
      newBeerName: ""
    };
  }

  handleDelete = (beerId, e) => {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.filter(beer => beer.id !== beerId);
    this.setState({
      beers: updatedBeerlist
    });
  };

  handleChange = e => {
    this.setState({
      newBeerName: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      beers: [
        ...this.state.beers,
        {
          id: this.state.newBeerCounter,
          name: this.state.newBeerName
        }
      ],
      newBeerCounter: this.state.newBeerCounter + 1
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
        <h3>Create New Beer</h3>
        <form onSubmit={e => this.handleSubmit(e)}>
          <fieldset>
            <label>Name of Beer:</label>
            <input
              type="text"
              value={this.state.newBeerName}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;

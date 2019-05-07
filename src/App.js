import React, { Component } from "react";
import "./App.css";
import CreateBeer from "./CreateBeer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          id: 0,
          name: "Choco Stout",
          edit: false
        },
        {
          id: 1,
          name: "Blonde White",
          edit: false
        },
        {
          id: 2,
          name: "Thunder Monkey",
          edit: false
        }
      ],
      newBeerCounter: 3,
      newBeerName: ""
    };
  }

  setEdit = (e, beerId) => {
    let newBeers = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, edit: true };
      } else {
        return { ...beer, edit: false };
      }
    });
    this.setState({
      beers: newBeers
    });
  };

  handleDelete = (beerId, e) => {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.filter(beer => beer.id !== beerId);
    this.setState({
      beers: updatedBeerlist
    });
  };

  handleUpdate(e, beerId) {
    const updatedBeerlist = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, name: e.target.value };
      } else {
        return { ...beer };
      }
    });
    this.setState({
      beers: updatedBeerlist
    });
  }

  handleChange(e) {
    this.setState({
      newBeerName: e.target.value
    });
  }

  handleSubmit(e) {
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
  }

  render() {
    const beersList = this.state.beers.map(beer => (
      <li key={beer.id} onClick={e => this.setEdit(e, beer.id)}>
        {beer.edit ? (
          <input
            type="text"
            name="editBeerName"
            value={beer.name}
            onChange={e => this.handleUpdate(e, beer.id)}
          />
        ) : (
          beer.name
        )}
        <a href="/" onClick={e => this.handleDelete(beer.id, e)}>
          Delete
        </a>
      </li>
    ));
    return (
      <div>
        <h1>Georgie's Beer Favorites</h1>
        <ul>{beersList}</ul>
        <CreateBeer
          handleSubmit={e => this.handleSubmit(e)}
          handleChange={e => this.handleChange(e)}
          newBeerName={this.state.newBeerName}
        />
      </div>
    );
  }
}

export default App;

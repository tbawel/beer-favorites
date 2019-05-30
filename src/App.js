import React, { Component } from "react";
import "./App.css";
import CreateBeer from "./CreateBeer";
import BeerList from "./BeerList";

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

  handleUpdate(beerId, updateBeerName, e) {
    e.preventDefault();
    const updatedBeerlist = this.state.beers.map(beer => {
      if (beer.id === beerId) {
        return { ...beer, name: updateBeerName, edit: false };
      } else {
        return { ...beer, edit: false };
      }
    });
    this.setState({
      beers: updatedBeerlist
    });
  }

  handleSubmit(e, newBeerName) {
    e.preventDefault();
    this.setState({
      beers: [
        ...this.state.beers,
        {
          id: this.state.newBeerCounter,
          name: newBeerName
        }
      ],
      newBeerCounter: this.state.newBeerCounter + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Georgie's Beer Favorites</h1>
        <BeerList
          beers={this.state.beers}
          setEdit={this.setEdit.bind(this)}
          handleDelete={this.handleDelete.bind(this)}
          handleUpdate={this.handleUpdate.bind(this)}
        />
        <CreateBeer handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import UpdateBeer from "./UpdateBeer";

class BeerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const beersList = this.props.beers.map(beer => (
      <UpdateBeer
        beer={beer}
        key={beer.id}
        setEdit={this.props.setEdit}
        handleUpdate={this.props.handleUpdate}
        handleDelete={this.props.handleDelete}
      />
    ));
    return <ul>{beersList}</ul>;
  }
}

export default BeerList;

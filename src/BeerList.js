import React, { Component } from "react";

class BeerList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const beersList = this.props.beers.map(beer => (
      <li key={beer.id}>
        {/* {beer.edit ? (
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
        </a> */}
        {beer.name}
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

export default BeerList;

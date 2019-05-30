import React, { Component } from "react";
import "./App.css";

class BeerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedBeerName: ""
    };
  }

  handleChange(e) {
    this.setState({
      updatedBeerName: e.target.value
    });
  }
  render() {
    const beersList = this.props.beers.map(beer => (
      <li key={beer.id}>
        <span onClick={e => this.props.setEdit(e, beer.id)}>
          {beer.edit ? (
            <input
              type="text"
              name="editBeerName"
              value={this.state.updatedBeerName}
              placeholder={beer.name}
              onChange={e => this.handleChange(e)}
            />
          ) : (
            beer.name
          )}
        </span>
        {beer.edit ? (
          <a
            href="/"
            onClick={e =>
              this.props.handleUpdate(beer.id, this.state.updatedBeerName, e)
            }
          >
            Update
          </a>
        ) : (
          <a href="/" onClick={e => this.props.handleDelete(beer.id, e)}>
            Delete
          </a>
        )}
      </li>
    ));
    return <ul>{beersList}</ul>;
  }
}

export default BeerList;

import React, { Component } from "react";
import "./App.css";
import DeleteBeer from "./DeleteBeer";

class UpdateBeer extends Component {
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
    return (
      <li>
        <span onClick={e => this.props.setEdit(e, this.props.beer.id)}>
          {this.props.beer.edit ? (
            <input
              type="text"
              name="editBeerName"
              value={this.state.updatedBeerName}
              placeholder={this.props.beer.name}
              onChange={e => this.handleChange(e)}
            />
          ) : (
            this.props.beer.name
          )}
        </span>
        {this.props.beer.edit ? (
          <a
            href="/"
            onClick={e =>
              this.props.handleUpdate(
                this.props.beer.id,
                this.state.updatedBeerName,
                e
              )
            }
          >
            Update
          </a>
        ) : (
          <DeleteBeer
            beerId={this.props.beer.id}
            handleDelete={this.props.handleDelete}
          />
        )}
      </li>
    );
  }
}

export default UpdateBeer;

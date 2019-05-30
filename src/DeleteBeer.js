import React, { Component } from "react";
import "./App.css";

class DeleteBeer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="/" onClick={e => this.props.handleDelete(this.props.beerId, e)}>
        Delete
      </a>
    );
  }
}

export default DeleteBeer;

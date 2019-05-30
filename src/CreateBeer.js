import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";

class CreateBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBeerName: ""
    };
  }

  handleChange(e) {
    this.setState({
      newBeerName: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Create New Favorite</h1>
        <form
          onSubmit={e => this.props.handleSubmit(e, this.state.newBeerName)}
        >
          <fieldset>
            <label>Name of Beer:</label>
            <input
              type="text"
              value={this.state.newBeerName}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <Link to="/">
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateBeer);

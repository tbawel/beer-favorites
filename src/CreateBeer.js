import React, { Component } from "react";
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
    return (
      <div>
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

export default CreateBeer;

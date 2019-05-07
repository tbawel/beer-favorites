import React, { Component } from "react";
import "./App.css";

class CreateBeer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.props.handleSubmit(e)}>
          <fieldset>
            <label>Name of Beer:</label>
            <input
              type="text"
              value={this.props.newBeerName}
              onChange={e => this.props.handleChange(e)}
            />
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateBeer;

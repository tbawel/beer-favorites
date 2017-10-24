import React, { Component } from 'react';

class BeerAdd extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      brewery: '',
      alcoholContent: 0
    }
    /* 
     * explicitly bind "this" which refers to 
     * this component "BeerAddForm"
     */
    this.addBeer = this.addBeer.bind(this); 
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * Update state every key stroke in input fields
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  handleInputChange(e) {
    this.setState({
      /* 
       * [e,target.name] can get value of the "name" attribute of
       * the input field which is currenlty typed in
       */       
      [e.target.name]: e.target.value 
    });
  }
  
  /**
   * Gets called when user submits form via "Add Beer" button
   * using the JS native onSubmit form event handler
   */
  addBeer(e) {
    e.preventDefault(); // prevent browser-standard of reloading page on form submit

    /* Use the method of the parent component "BeerList" which has been passed down
     * via the onAddBeer property (this.props)
     */
    this.props.onAddBeer(this.state.name, this.state.brewery, this.state.alcoholContent);
  }

  render() {
    return (
      <form onSubmit={ this.addBeer }>
        <label id="newBeerName">Name:</label>
        <input id="newBeerName" name="name" type="text" onChange={ this.handleInputChange }/><br/>
        <label id="newBeerBrewery">Brewery:</label>
        <input id="newBeerBrewery" name="brewery" type="text" onChange={ this.handleInputChange }/><br/>
        <label id="newBeerAlcoholContent">Alcohol Content:</label>
        <input id="newBeerAlcoholContent" name="alcoholContent" type="number" onChange={ this.handleInputChange }/><br/>
        <button>Add Beer</button>
      </form>
    );
  }
}

export default BeerAdd;
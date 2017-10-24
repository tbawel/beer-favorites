import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      brewery: '',
      alcoholContent: 0
    }

    /* 
     * explicitly bind "this" which refers to 
     * this component "BeerUpdate"
     */
    this.updateBeer = this.updateBeer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    
    // API GET request => get beer by Id
    axios.get('/api/beers/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          brewery: response.data.brewery,
          alcoholContent: response.data.alcoholContent
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  /**
   * Update state every key stroke in input fields
   * https://reactjs.org/docs/forms.html#controlled-components
   */
  handleInputChange(e) {
    /* 
     * [e,target.name] can get value of the "name" attribute of
     * the input field which is currenlty typed in
     */ 
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  /* Gets called when user clicks "Update Beer" button
   * via JS native onSubmit form event handler
   */
  updateBeer(e) {
    e.preventDefault(); // prevent browser-standard of reloading page on form submit

    // UPDATE/PUT API request, 2nd parameter = object with new details
    if(this.props.accessToken.length) {
      axios.put('/api/beers/' + this.props.match.params.id + '?access_token=' + this.props.accessToken, {
        name: this.state.name,
        brewery: this.state.brewery,
        alcoholContent: this.state.alcoholContent
      })
      .then((response) => { // successfull api call = beer updated in mongodb database
        this.props.history.push('/beers/' + this.props.match.params.id); // redirect to beer detail page after update
      })
      .catch((error) => { 
        console.log(error);
      });
    }
    else {
      alert('Sorry, login first to update the beer!')
    }

  }

  /**
   * see https://reactjs.org/docs/forms.html#controlled-components for onChange
   */
  render() {
    return (
      <div>
        <h3>Update Beer</h3>
        <form onSubmit={ this.updateBeer }>
          <label>
            Name:
            <input value={ this.state.name } name="name" type="text" onChange={ this.handleInputChange }/>
          </label><br />
          <label>
            Brewery:
            <input value={ this.state.brewery } name="brewery" type="text" onChange={ this.handleInputChange }/>
          </label><br/>
          <label>
            Alcohol Content:
            <input value={ this.state.alcoholContent } name="alcoholContent" type="number" onChange={ this.handleInputChange }/>
          </label><br/>
          <button>Update Beer</button>
        </form>
        <Link to={ '/beers/' + this.props.match.params.id }> <button>Back</button></Link> {/* Adds link back to beer details */}
      </div>
    );
  }
}

export default BeerUpdate;
import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
			username: "",
			password: "",
		}
		
		this.login = this.login.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	handleInputChange(e) {
    this.setState({     
        [e.target.name]: e.target.value     
    });
  }

  /**
   * Gets called when user submits form via "Login" button
   * using the JS native onSubmit form event handler
   */
  login(event) {
    event.preventDefault(); // prevent browser-standard of reloading page on form submit
    
    // POST API request to login user
    axios.post('/api/Users/login', {
			username: this.state.username,
			password: this.state.password
		})
    .then((response) => { // successful api call

      /* Use the method of the parent component "App" which has been passed down
       * via the onLogin property (this.props)
       */
			this.props.onLogin(response.data.id); 
    })
    .catch((error) => {
    	console.log(error);
    });
  }

  render() {

    return (
      <form onSubmit={ this.login } >
        <label>
					Username:
					<input name="username" type="text" onChange={ this.handleInputChange }/>
				</label>
        <label>
					Password:
					<input name="password" type="password" onChange={ this.handleInputChange }/>
				</label>
				<button>Login</button>
      </form>
    );
  }
}

export default Login;
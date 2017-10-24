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

  login(event) {
		event.preventDefault()
    axios.post('/api/Users/login', {
			username: this.state.username,
			password: this.state.password
		})
    .then((response) => {
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
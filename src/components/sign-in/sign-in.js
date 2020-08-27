import React from 'react';

import './sign-in.scss';
import FormInput from '../form-input/forminput';
import CustomButton from '../custom-button/custom-button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState(prevState => ({
      ...prevState,
      email: "",
      password: ""
    }))
  }

  handleChange = event => {
    let { name, value } = event.target;
  
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>                 
          <FormInput 
            name="email"           
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
          />          

          <FormInput 
            name="password"           
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
          />      

          <CustomButton 
            type="submit"
            buttonName="Submit form"
          />          
        </form>
      </div>
    )
  }
}

export default SignIn;
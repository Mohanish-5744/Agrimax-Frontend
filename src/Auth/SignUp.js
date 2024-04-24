import './login.css'
import './signup.css'
import React from 'react'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ReactComponent as GoogleIcon } from './google.svg';
import SignUpService from './SignUpService';
export default class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      adharno: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name,adharno, email, password } = this.state;
    
    SignUpService.getUsers(name,adharno, email, password)
      .then((response) => {
        alert('User inserted successfully');
        this.setState({
          name: '',
          email: '',
          adharno: '',
          password: ''
        });
          event.target.reset();
          window.location.href = "/";
      })
      .catch((error) => {
      });
  }
  
  
  render() {
    return (
      <div class="containeram">
        <div className="log-form">
          <div className="logoIcon"></div>
          <p className="bold-text">Welcome</p>
          <p className="fade-text">Already have an account?  <Link to="/">Sign In</Link></p>

          <div className='log-form-container'>
            <form onSubmit={this.handleSubmit}>
              <div className="log-detail">
                <label for="full name">Full name</label>
                <input type="text" placeholder="Enter your username or email" className="email-inp" name="name" value={this.state.name} onChange={this.handleChange} required/>

                <label for="aadhaar card">Aadhaar card no</label>
                <input type="number" placeholder="Enter your username or email" className="email-inp" name="adharno" value={this.state.adharno} onChange={this.handleChange} required/>
      
                <label for="email">Email address</label>
                <input type="email" placeholder="Enter your username or email" className="email-inp" name="email" value={this.state.email} onChange={this.handleChange} required/>

                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} required/>
              </div>


              <div class="checkbox-container">
                <div class="left">
                  <input type="checkbox" class="check-btn" id="rememberMe" />
                  <label for="rememberMe">I agree to Terms and Conditions.</label>
                </div>
              </div>

              <input type="submit" value="Sign Up" />
            </form>
            <div className="log-method">
              <div className="or-section"><div className="hr-line"></div><span>or</span><div className="hr-line"></div></div>
              <button className="google-btn"><span><GoogleIcon className="google-icon" /></span> <span>Continue with Google</span></button>
            </div>

          </div>

        </div>
        <div className="bg-vid">
        </div>
      </div>

    );
  }
}
// export default SignInForm;
import React from "react";
import './login.css'
import { ReactComponent as GoogleIcon } from './google.svg';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginService from "./LoginService";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

class loginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    LoginService.getUsers(email, password).then((response) => {
      if (response.data === true) {
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        this.setState({
          email: '',
          password: ''
        });
        event.target.reset();
        toast.success('Successfully logged in!');
        window.location.href = "/Home";
      }
      else if (response.data == false) {
        toast.error('Login Failed');
        this.setState({
          email: '',
          password: ''
        });
        event.target.reset();
      }
    })
      .catch((error) => {
        console.log('Record not present');
      });
    event.preventDefault();
  }
  render() {
    return (
      <div class="containeram">
        
          <div className="log-form">
            {/* <Router> */}
            <div className="logoIcon">   </div>
            <p className="bold-text">Welcome Back</p>
            <p className="fade-text">Create new account?
              <span>  <Link to="/signUp">Sign Up</Link></span>
            </p>
            <div className='log-form-container'>
            <form onSubmit={this.handleSubmit}>
              <div className="log-detail">
                <label for="email">Email address</label>
                <input type="email" placeholder="Enter your username or email" className="email-inp" value={this.state.email} onChange={this.handleChange} name="email" required/>
                <label for="password">Password</label>
                <input type="password" placeholder="Enter your password" value={this.state.password} onChange={this.handleChange} name="password" required/>
              </div>

              <div class="checkbox-container">
                <div class="left">
                  <input type="checkbox" class="check-btn" id="rememberMe" />
                  <label for="rememberMe">Remember me</label>
                </div>
                <div class="right">
                  <a href="#" class="forgot-password">Forgot password</a>
                </div>
              </div>

              <input type="submit" value="Submit" />
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
export default loginForm;

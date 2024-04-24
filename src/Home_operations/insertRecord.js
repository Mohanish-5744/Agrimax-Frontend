// Frontend React component

import React from 'react';
import axios from 'axios';
import insertService from './insertService';
import SearchService from './SearchService';

class InserRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
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
    const { name, email, password } = this.state;

    // Make an HTTP POST request to the backend API endpoint
    // axios
    //   .post('/api/users', { name, email, password })
    
        insertService.getUsers(name, email, password).then((response) => {
          console.log('User inserted successfully',email);
          alert('User inserted successfully');
          // Handle any success actions or update the UI
        })
        // Handle any error cases or display an error message
    
    event.preventDefault();

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Insert User Data</h1>
          <label>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default InserRecord;

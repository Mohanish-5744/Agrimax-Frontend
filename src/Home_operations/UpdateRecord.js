import React from 'react';
import SearchService from './SearchService';
import UpdateService from './UpdateService';

class UpdateRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      value: '',
      id: '',
      name: '',
      email: '',
      password: '',
      isSubmitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    
  }

  handleUpdate(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    SearchService.getUsers(this.state.value).then((response) => {
      this.setState({ users: response.data, isSubmitted: true });
    });
  }

  handleSubmit1(event) {
    event.preventDefault();
    const { id, name, email, password } = this.state;
    UpdateService.UpdateUsers(id, name, email, password)
      .then((response) => {
        console.log('User updated successfully');
        this.setState({ isSubmitted: false });
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Uncontrolled Form Example</h1>
          <label>
            Enter User ID:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
          <h1 className="text-center">Users List</h1>
        </form>

        {this.state.isSubmitted && (
          <form onSubmit={this.handleSubmit1}>
            <h1>Update User Data</h1>
            <label>
              ID:
              <input
                type="text"
                name="id"
                id="p1"
                onChange={this.handleUpdate}
              />
            </label>
            <label>
              Name:
              <input
                type="text"
                name="name"
               id="p2"
                onChange={this.handleUpdate}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                id="p3"
                onChange={this.handleUpdate}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                id="p4"
                onChange={this.handleUpdate}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
      </div>
    );
  }
}

export default UpdateRecord;


// value={this.state.users.password}
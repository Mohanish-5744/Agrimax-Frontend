import React from 'react';
import CropService from './CropService';

class IndividualCrop extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            value: '',
            name : SearchBar.query,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        // SearchService.getUsers(this.state.value).then((response) => {
        //     this.setState({ users: response.data })
        // });
        // event.preventDefault();
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Uncontrolled Form Ecample</h1>
                    <label>Enter Your Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="Submit"></input>
                    <h1 className="text-center"> Users List</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td> Book Id</td>
                                <td> Title </td>
                                <td> Author </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                <tr key={this.state.users.id}>
                                    <td> {this.state.users.id}</td>
                                    <td> {this.state.users.name}</td>
                                    <td> {this.state.users.mail}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

export default IndividualCrop
import React from 'react';
import deleteService from './deleteService';

class DeleteRecord extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        deleteService.getUsers(this.state.value)
        document.getElementById('p1').innerHTML="Deleted Value is: "+this.state.value
        event.preventDefault();
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
                </form>
                <p id='p1'></p>
            </div>

        )
    }
}

export default DeleteRecord
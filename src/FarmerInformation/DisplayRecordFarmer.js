import React from 'react';
import DisplayServiceFarmer from './DisplayServiceFarmer';
import DeleteServiceFarmer from './DeleteServiceFarmer';
class DisplayRecordFarmer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        console.log("mounting is done ");
        DisplayServiceFarmer.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    getData(id) {
        console.log("hello", id)
        DeleteServiceFarmer.getUsers(id).then((response) => {
            alert("Data deleted Sucessful")
            DisplayServiceFarmer.getUsers().then((response) => {
                this.setState({ users: response.data })
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container-table-nohh">
                    <h2>List<small> Farmers</small></h2>
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Id</div>
                            <div className="col col-2">Email</div>
                            <div className="col col-3">Name</div>
                            <div className="col col-4">Address</div>
                        </li>
                        {this.state.users.map(
                            user =>
                                <li className="table-row" key={user.id}>
                                    <div className="col col-1" data-label="Job Id">{user.id}</div>
                                    <div className="col col-2" data-label="Customer Name">{user.email}</div>
                                    <div className="col col-3" data-label="Amount">{user.fname}</div>
                                    <div className="col col-4" data-label="Payment Status">{user.address}</div>
                                    <td style={{marginLeft:"-30px"}}><button onClick={() => this.getData(user.id)}>x</button></td>
                                </li>
                        )
                        }
                    </ul>
                </div>


            </div>

        )
    }
}

export default DisplayRecordFarmer
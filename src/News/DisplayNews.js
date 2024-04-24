import React from 'react';
import DeleteNewsServices from './DeleteNewsServices';
import DisplayNewsService from './DisplayNewsService';
class DisplayNews extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        console.log("mounting is done ");
        DisplayNewsService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
    
    getData(id){
        console.log("hello",id)
        DeleteNewsServices.getUsers(id).then((response) => {
            alert("Data deleted Sucessful")
            DisplayNewsService.getUsers().then((response) => {
                this.setState({ users: response.data })
            });
        });
    }

    render() {
        return (
            <div>
                <div className="container-table-nohh">
                    <h2>List<small> News</small></h2>
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-new-3">Id</div>
                            <div className="col col-new-5">Date</div>
                            <div className="col-new-1-1">Publisher Name</div>
                            {/* <div className="col col-4">Address</div> */}
                        </li>
                        {
                            this.state.users.map(
                            user =>
                                <li className="table-row" key={user.id}>
                                    <div className="col col-1" data-label="Job Id">{user.id}</div>
                                    <div className="col col-1" data-label="Customer Name">{user.date}</div>
                                    <div className="col col-1" data-label="Amount">{user.publisherName}</div>
                                    {/* <div className="col col-4" data-label="Payment Status">{user.address}</div> */}
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

export default DisplayNews
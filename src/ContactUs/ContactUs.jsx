import React from 'react'
import TopBar from "../Screens/topbar";
import Footer from '../Screens/footer';
import emailService from './emailService';

const divStyles = {
    boxShadow: '1px 2px 3px black',
    margin: '4em',
    padding: '1em',
    borderRadius: '20px',
};

export default class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phoneNumber: '',
            message: '',
            selectSubject1:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const {
            fname,
            lname,
            email,
            phoneNumber,
            message,
            selectSubject} = this.state;

        // Make an HTTP POST request to the backend API endpoint
        // axios
        //   .post('/api/users', { name, email, password })

        emailService.getUsers(
            fname,
            lname,
            email,
            phoneNumber,
            message,
            selectSubject
        ).then((response) => {
            console.log('email Sending', email);
            console.log('Sending', selectSubject);
            alert('email successfully send');
        })
        // Handle any error cases or display an error message

        event.preventDefault();

    }

    render() {
        return (
            <div>
                <TopBar></TopBar>
                <div className="mt-5" style={divStyles}>
                    <div className="image">
                        <img src="./images/contact.png" className="" style={{ float: 'right', height: 500, borderRadius: '20px' }} alt="" />
                    </div>
                    <h1 className="mb-3 text-left" style={{ color: "green" }}>Contact Us</h1>
                    <h5 className="md-3 text-left" style={{ color: 'gray' }} >ALWAYS HERE TO HELP YOU</h5>
                    <div className="contact-form" style={{}} >
                        <form onSubmit={this.handleSubmit}>
                            <div className="contact_form  ">
                                <div className="fist_last d-flex">
                                    <div className="mb-3 ">
                                        <label className="form-label" htmlFor="first_name">
                                            First Name
                                        </label>
                                        <input className="form-control" type="text" id="first_name" name='fname' placeholder="John" value={this.state.fname} onChange={this.handleChange} required />
                                    </div>
                                    <div className="mb-3 mx-3">
                                        <label className="form-label" htmlFor="last_name">
                                            Last Name
                                        </label>
                                        <input className="form-control" type="text" id="last_name" name='lname' placeholder="Cena" value={this.state.lname} onChange={this.handleChange} required />
                                    </div>
                                </div>
                                <div className="phone_email d-flex ">
                                    <div className="mb-3 ">
                                        <label className="form-label" id="phone-number" htmlFor="phone">
                                            Phone Number
                                        </label>
                                        <input className="form-control" type="number" id="phone" name='phoneNumber' placeholder="+91 12345" value={this.state.phoneNumber} onChange={this.handleChange} required />
                                    </div>
                                    <div className="mb-3 mx-3">
                                        <label className="form-label" id="email" htmlFor="email">
                                            Email
                                        </label>
                                        <input className="form-control" type="email" id="email" name="email" placeholder="example@gmail.com" value={this.state.email} onChange={this.handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 ">
                                <label className="form-label " htmlFor="message">
                                    Message
                                </label>

                                <div className="textarea d-flex">
                                    <textarea className="form-control" id="message" rows={3} placeholder="Write your message.." name='message' value={this.state.message} onChange={this.handleChange} required />
                                </div>
                            </div>
                            <div className="subject_form">
                                <p style={{ fontSize: '16px' }}>Select Subject?</p>
                                <input type="radio" className="form-label mx-3" name='selectSubject' value="General inquiry" onChange={this.handleChange} /> General inquiry
                                <input type="radio" className="form-label mx-3" name='selectSubject' value="Technical support" onChange={this.handleChange} /> Technical support
                                <input type="radio" className="form-label mx-3" name='selectSubject' value="Billing issue" onChange={this.handleChange} /> Billing issue
                            </div>

                            <div className="button my-3" >
                                <button className="btn btn-success" style={{ alignContent: 'center' }} type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>


        )
    }
}
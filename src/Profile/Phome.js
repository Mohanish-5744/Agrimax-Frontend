import React, { useState } from "react";
import PhomeService from "./PhomeService";
import './Phome.css';
import UpdateFarmerService from "./UpdateFarmerService";
import TopBar from "../Screens/topbar";
import Footer from "../Screens/footer";
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import './FarmerProfile.css';
import Initial from "./initailProfile";
import DataInsertionPage from "../FarmerInformation/Data";
import DisplayRecordFarmer from '../FarmerInformation/DisplayRecordFarmer';
import './DropDown.css';
import axios from "axios";

class Phome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // users: null,
      value: '',
      id: '',
      fname: '',
      lname: '',
      email: '',
      adharno: '',
      crop1: '',
      crop2: '',
      crop3: '',
      address: '',
      category: '',
      areainacars: '',
      areacoordinates: '',
      contact: '',
      showDetails: false,
      showPreviousDetails: false,
      isPopupVisible: false,
      isPopupVisible1: false,
      isDropdownOpen: false,

      //News Serch Bar
      query: '',
      suggestions: [],
      showResults: false,
      // User: []
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.showUserDetails = this.showUserDetails.bind(this);
    this.showPreviousDetails = this.showPreviousDetails.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleValue(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      isPopupVisible: !prevState.isPopupVisible,
    }));
  };
  
  togglePopup1 = () => {
    this.setState((prevState1) => ({
      isPopupVisible1: !prevState1.isPopupVisible1,
    }));
  };

  handleValueSubmit = (event) => {
    event.preventDefault();
    UpdateFarmerService.UpdateUsers(
      this.state.id,
      this.state.fname,
      this.state.lname,
      this.state.address,
      this.state.crop1,
      this.state.crop2,
      this.state.crop3,
      this.state.email,
      this.state.adharno,
      this.state.areacoordinates,
      this.state.areainacars,
      this.state.category,
      this.state.contact
    ).then((response) => {
      alert('User updated successfully');
    })
      .catch((error) => {
        console.error('Error updating user:', error);
      });

    // Additional console.log statements for other fields if needed

    // Rest of the code for updating the user
  }

  showUserDetails() {
    this.setState({ showDetails: true });
  }

  showPreviousDetails() {
    this.setState({ showDetails: false });
  }

  handleMouseEnter() {
    this.setState({ isDropdownOpen: true });
  }

  handleMouseLeave() {
    this.setState({ isDropdownOpen: false });
  }

  //News Search Bar

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      query: value,
    });

    if (value.length >= 1) {
      this.fetchSuggestions(value);
    } else {
      this.setState({
        suggestions: []
      });
    }
  };

  fetchSuggestions = async (value) => {
    try {
      console.log(value)
      const response = await axios.get("http://localhost:8080/FarmerInfo?fname=" + value);
      this.setState({ suggestions: response.data });
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching suggestions:');
    }
  };

  handleItemClick = (fname, lname) => {
    this.setState({
      query: fname + " " + lname,
      suggestions: []
    });
  };

  handleSubmitFarmer = (event) => {
    event.preventDefault();
    // Perform the search or any other action here
    console.log('Search submitted:', this.state.query);
    PhomeService.getUsers(this.state.query)
      .then((response) => {
        this.setState({ users: response.data });
        const { id,
          fname, lname,
          email,
          adharno,
          crop1,
          crop2,
          crop3,
          address,
          category,
          areainacars,
          areacoordinates,
          contact,
        } = response.data;
        this.setState({
          id,
          fname, lname,
          email,
          adharno,
          crop1,
          crop2,
          crop3,
          address,
          category,
          areainacars,
          areacoordinates,
          contact,
        });
      })
      .catch((error) => {
        alert('Record Not Found');
      });
    event.preventDefault();
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { query, suggestions } = this.state;
    return (

      <div>
        <TopBar></TopBar>

        <div className="search-box-wrap">
          {suggestions.length > 0 && (
            <ul className="suggestions-ul">
              {suggestions.map((farmer) => (
                <li className="suggestion-li" key={farmer.id} onClick={() => this.handleItemClick(farmer.fname, farmer.lname)}>
                  {farmer.fname} {farmer.lname}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="dropdown-container"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <button1 className="dropdown-button"></button1>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {/* Add your dropdown content here */}
              <p style={{ borderBottom: "1px solid #ccc" }}>
                <Link to="/RegisterFarmer" className="link-plus" style={{ textDecoration: "none", display: "inline", color: "black" }}>
                  Add Farmer
                </Link>
              </p>
              <p style={{ borderBottom: "1px solid #ccc" }}>
                <button1 onClick={this.togglePopup} style={{ border: "none", background: "none", cursor: "pointer", display: "inline", color: "black", fontWeight: "bold" }}>
                  Add Excel
                </button1>
              </p>
              <p style={{ borderBottom: "1px solid #ccc" }}>
                <button1 onClick={this.togglePopup1} style={{ border: "none", background: "none", cursor: "pointer", display: "inline", color: "black", fontWeight: "bold" }}>
                  List All
                </button1>
              </p>
            </div>
          )}
        </div>
        {this.state.isPopupVisible && (
          <div id="myPopup" className="popup-farmer-info-total-ll ">
            <div className="popup-content">
              <span className="close" onClick={this.togglePopup}>&times;</span>
              <p><DataInsertionPage></DataInsertionPage></p>
            </div>
          </div>
        )}

        {this.state.isPopupVisible1 && (
          <div id="myPopup" className="popup">
            <div className="popup-content">
              <span className="close" onClick={this.togglePopup1}>&times;</span>
              <p><DisplayRecordFarmer></DisplayRecordFarmer></p>
            </div>
          </div>
        )}
        <section className="section about-section gray-bg" id="about">
          {this.state.users && !this.state.showDetails && (
            <div>
              <form onSubmit={this.handleSubmitFarmer}>
                <div className="Gray-color-box-top">
                  <div className="search-box-farmer">
                    <input type="text" placeholder="Search Information" value={query} onChange={this.handleInputChange} style={{ zIndex: "3" }} />
                    <button>Search</button>
                  </div>
                </div>
              </form>
              <div className="circle-box-center">
                <div className="circle-icon-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ height: "100px", width: "100px" }}></img>
                </div>
              </div>
              <div className="box-of-text">
                <br></br>
                <lable className="user-Name">{this.state.fname} {this.state.lname}</lable>
                <br></br>
                <br></br>
                <lable className="user-Type-catagory">Catagory - {this.state.category}</lable>
              </div>
              <div className="box">
                <div className="area-total-area-land">
                  <label className="value">{this.state.areainacars}</label>
                  <div className="text">
                    Area
                  </div>
                  <div className="line-seperator"></div>
                </div>

                <div className="adhar-number-field">
                  <label className="value">{this.state.adharno}</label>
                  <div className="text">
                    Adhar Number
                  </div>
                  <div className="line-seperator"></div>
                </div>

                <div className="contact-number-field">
                  <label className="value">{this.state.contact}</label>
                  <div className="text">
                    Contact Number
                  </div>
                  <div className="line-seperator"></div>
                </div>
                <div className="line-seperator1"></div>
              </div>
              <br></br>
              {!this.state.showDetails && (
                <div>
                  <button className="ending-button-farmer" onClick={this.showUserDetails}>Details</button>
                </div>
              )}
            </div>
          )}

          {this.state.showDetails && (
            <div>
              <form onSubmit={this.handleSubmitFarmer}>
                <div className="white-color-box-top">
                  <div className="search-box-farmer">
                    <input type="text" placeholder="Search Information" value={query} onChange={this.handleInputChange} style={{ zIndex: "3" }} />
                    <button>Search</button>
                  </div>
                </div>
              </form>

              <div>
                <div className="section-left">
                  <div className="Detail-heading">
                    Profile
                  </div>
                  <div className="circle-box-center1">
                    <div className="circle-icon-center1">
                      <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ height: "100px", width: "100px" }} alt="Avatar" />
                    </div>
                  </div>
                  <div className="box-of-text1">
                    <br />
                    <label className="user-Name1">{this.state.fname} {this.state.lname}</label>
                    <br></br>
                    <label className="user-Type-catagory1">Category - {this.state.category}</label>
                  </div>
                  <div className="box1">
                    <div className="area-total-area-land1">
                      <label className="value1">{this.state.areainacars}</label>
                      <div className="text1">
                        Area
                      </div>
                      <div className="line-separator"></div>
                    </div>

                    <div className="adhar-number-field1">
                      <label className="value1">{this.state.adharno}</label>
                      <div className="text1">
                        Aadhaar Number
                      </div>
                      <div className="line-separator1"></div>
                    </div>

                    <div className="contact-number-field1">
                      <label className="value1">{this.state.contact}</label>
                      <div className="text1">
                        Contact Number
                      </div>
                      <div className="line-separator1"></div>
                    </div>
                    <div className="line-separator1"></div>
                  </div>
                  <br ></br>
                  <button className="ending-button-farmer1" onClick={this.showPreviousDetails}>Back</button>
                </div>
                <div>
                  <div className="section-right">
                    <div className="information">
                      <div className="parent-container">
                        <div className="basic-information">
                          <label className="text2">BASIC INFO</label>
                          <div className="button-container">
                            <button className="cancel-button-farmer1">Cancel</button>
                            <form onSubmit={this.handleValueSubmit}>
                              <button className="save-button-farmer1">Save</button>
                            </form>
                          </div>
                        </div>
                      </div>
                      <p>Your First Name</p>
                      <input type="text" placeholder="First Name" name="fname" style={{ width: "50%" }} value={this.state.fname} onChange={this.handleValue} />
                      <div className="alignleft">
                        <p>Your Last Name</p>
                        <input type="text" placeholder="Last Name" name="lname" style={{ width: "42%" }} value={this.state.lname} onChange={this.handleValue} />
                      </div>
                      <p>Address</p>
                      <input type="text" placeholder="Address" name="address" style={{ width: "100%" }} value={this.state.address} onChange={this.handleValue} />
                      <br /><br /><br />
                      <p>Crop Cultivated</p>
                      <input type="text" placeholder="Crop 1" name="crop1" value={this.state.crop1} onChange={this.handleValue} />
                      <div className="aligncrop2">
                        <input type="text" placeholder="Crop 2" name="crop2" value={this.state.crop2} onChange={this.handleValue} />
                      </div>
                      <div className="aligncrop3">
                        <input type="text" placeholder="Crop 3" name="crop3" value={this.state.crop3} onChange={this.handleValue} />
                      </div>
                      <p>Your Email</p>
                      <input type="text" placeholder="Email" name="email" style={{ width: "100%" }} value={this.state.email} onChange={this.handleValue} />
                      <br></br>
                      <br></br>
                      <div className="parent-container">
                        <div className="basic-information">
                          <br></br>
                          <label className="text2">ABOUT ME</label>
                        </div>
                      </div>
                      <p>Your Aadhaar Number</p>
                      <input type="text" placeholder="Aadhaar Number" name="adharno" style={{ width: "50%" }} value={this.state.adharno} onChange={this.handleValue} />
                      <div className="alignleft">
                        <p>Your Category</p>
                        <input type="text" placeholder="Category" name="category" style={{ width: "42%" }} value={this.state.category} onChange={this.handleValue} />
                      </div>

                      <p>Your Area Coordinates</p>
                      <input type="text" placeholder="Area Coordinates" name="areacoordinates" style={{ width: "100%" }} value={this.state.areacoordinates} onChange={this.handleValue} />
                      <br /><br /><br />
                      <p>Your Area in Acres</p>
                      <input type="text" placeholder="Area in Acres" name="areainacars" style={{ width: "50%" }} value={this.state.areainacars} onChange={this.handleValue} />

                      <div className="alignleft">
                        <p>Your Contact</p>
                        <input type="text" placeholder="Contact Number" name="contact" style={{ width: "42%" }} value={this.state.contact} onChange={this.handleValue} />
                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
          {!this.state.users && (
            <div>
              <form onSubmit={this.handleSubmitFarmer}>
                <div className="Gray-color-box-top">
                  <div className="search-box-farmer">
                    <input type="text" placeholder="Search Information" value={query} name='query' onChange={this.handleInputChange} style={{ zIndex: "3" }} />
                    <button>Search</button>
                  </div>
                </div>
              </form>
              <Initial></Initial>
            </div>
          )}
        </section>
        <Footer></Footer>




      </div>
    );
  }
}

export default Phome;

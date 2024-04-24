import React from "react";
import './News.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Tractor } from './tractor.svg';
import { ReactComponent as Try1 } from './try1.svg';
import { ReactComponent as Try2 } from './try2.svg';
import { ReactComponent as Try3 } from './try3.svg';
import TopBar from "../Screens/topbar";
import Footer from "../Screens/footer";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsPeople } from 'react-icons/ai';
import boxIcon from './box.svg'
import NewsService from "./NewsService";
import AddNews from "./AddNews";
import DisplayNews from "./DisplayNews";
import '../Profile/DropDown.css'

import './ImageSlider.css'; // Import your custom CSS file

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isPopupVisible: false,
            isPopupVisible1: false,
            isDropdownOpen: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        console.log("mounting is done ");
        NewsService.getUsers().then((response) => {
            this.setState({ users: response.data }, () => {
                this.displayLastFourRecords();
            });
        });
    }

    displayLastFourRecords() {
        const { users } = this.state;
        const lastFourRecords = users.slice(-4); // Get the last four records from the users array
        this.setState({ lastFourRecords });
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

    handleMouseEnter() {
        this.setState({ isDropdownOpen: true });
    }

    handleMouseLeave() {
        this.setState({ isDropdownOpen: false });
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            className: 'image-slider', // Add a custom class name to the slider
        };
        const { lastFourRecords } = this.state;
        const { isDropdownOpen } = this.state;
        return (
            <div>
                {this.state.isPopupVisible && (
                    <div id="myPopup" className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={this.togglePopup}>&times;</span>
                            <p><AddNews></AddNews></p>
                        </div>
                    </div>
                )}

                {this.state.isPopupVisible1 && (
                    <div id="myPopup" className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={this.togglePopup1}>&times;</span>
                            <p><DisplayNews></DisplayNews></p>
                        </div>
                    </div>
                )}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <TopBar></TopBar>

                <Slider {...settings}>
                    <div>
                        <Try1></Try1>
                    </div>
                    <div>
                        <Try2></Try2>
                    </div>
                    <div>
                        <Try3></Try3>
                    </div>
                </Slider>

                <table className="mb-0">
                    <tr>
                        {lastFourRecords && lastFourRecords.length >= 1 && (
                            <div>
                                <td>
                                    <img src="./images/picture5.jpg" alt="" style={{ height: "270px", width: "450px" }} className="m-5" />
                                </td>
                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top">
                                            <span className="headluine-date h5" style={{ color: "rgb(7, 155, 39)" }}>{lastFourRecords[3].date}</span>
                                            <span className="mx-2">{lastFourRecords[3].publisherName}</span>
                                        </div>
                                        <span className="headline_txt fw-bolder h3">
                                            {lastFourRecords[3].heading}
                                        </span>
                                    </div>
                                </td>

                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top h6">
                                            {lastFourRecords[3].discription}
                                        </div>
                                        <br></br>
                                        <span className="" style={{ color: "rgb(131, 211, 46)" }}>Read me ></span>
                                    </div>
                                </td>
                            </div>
                        )}
                    </tr>
                    <br></br>
                    <tr>
                        {lastFourRecords && lastFourRecords.length >= 2 && (
                            <div>
                                <td>
                                    <img src="./images/picture4.jpg" alt="" style={{ height: "270px", width: "450px" }} className="m-5 mt-0" />
                                </td>
                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top">
                                            <span className="headluine-date h5" style={{ color: "rgb(7, 155, 39)" }}>{lastFourRecords[2].date}</span>
                                            <span className="mx-2">{lastFourRecords[2].publisherName}</span>
                                        </div>
                                        <span className="headline_txt fw-bolder h3">
                                            {lastFourRecords[2].heading}
                                        </span>
                                    </div>
                                </td>

                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top h6">
                                            {lastFourRecords[2].discription}
                                        </div>
                                        <br></br>
                                        <span className="" style={{ color: "rgb(131, 211, 46)" }}>Read me ></span>
                                    </div>
                                </td>
                            </div>
                        )}
                    </tr>
                </table>

                <Slider {...settings}>
                    <div>
                        <img src="./images/landscape3.jpg" alt="" style={{ height: "350px", width: "100%" }}></img>
                    </div>
                    <div>
                        <img src="./images/landscape5.jpg" alt="" style={{ height: "350px", width: "100%" }}></img>
                    </div>
                    <div>
                        <img src="./images/landscape6.jpg" alt="" style={{ height: "350px", width: "100%" }}></img>
                    </div>
                </Slider>

                <table>
                    <tr>
                        {lastFourRecords && lastFourRecords.length >= 3 && (
                            <div>
                                <td>
                                    <img src="./images/drone.jpg" alt="" style={{ height: "270px", width: "450px" }} className="m-5" />
                                </td>
                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top">
                                            <span className="headluine-date h5" style={{ color: "rgb(7, 155, 39)" }}>{lastFourRecords[1].date}</span>
                                            <span className="mx-2">{lastFourRecords[1].publisherName}</span>
                                        </div>
                                        <span className="headline_txt fw-bolder h3">
                                            {lastFourRecords[1].heading}
                                        </span>
                                    </div>
                                </td>

                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top h6">
                                            {lastFourRecords[1].discription}
                                        </div>
                                        <br></br>
                                        <span className="" style={{ color: "rgb(131, 211, 46)" }}>Read me ></span>
                                    </div>
                                </td>
                            </div>
                        )}
                    </tr>
                    <br></br>
                    <tr>
                        {lastFourRecords && lastFourRecords.length >= 4 && (
                            <div>
                                <td>
                                    <img src="./images/picture7.jpg" alt="" style={{ height: "270px", width: "450px" }} className="m-5 mt-0" />
                                </td>
                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top">
                                            <span className="headluine-date h5" style={{ color: "rgb(7, 155, 39)" }}>{lastFourRecords[0].date}</span>
                                            <span className="mx-2">{lastFourRecords[0].publisherName}</span>
                                        </div>
                                        <span className="headline_txt fw-bolder h3">
                                            {lastFourRecords[0].heading}
                                        </span>
                                    </div>
                                </td>

                                <td className="align-top">
                                    <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem', minWidth: '200px' }}>
                                        <div className="headline-by mb-1 align-top h6">
                                            {lastFourRecords[0].discription}
                                        </div>
                                        <br></br>
                                        <span className="" style={{ color: "rgb(131, 211, 46)" }}>Read me ></span>
                                    </div>
                                </td>
                            </div>
                        )}
                    </tr>
                </table>

                <div className='bottom-info'>

                    <div className="bottom-body">
                        <span className="bottom-text1 fw-bold h3 m-0 p-0">Helping a local </span>
                        <div className="bottom-text-div"><span className="bottom-text2 fw-bold h2 m-0 p-0" >business reinvent itself</span></div>
                        <span className="bottom-text3">
                            We reached here with our hard work and dedication
                        </span>
                    </div>

                    <div className="bottom-icon-2">
                        <img src={boxIcon}></img>
                    </div>

                </div>




                <div className="bottom-sctn-slogan">
                    <Tractor className="Tractor-icon" />


                    <div className="bottom-slogan align-center">
                        <div className="bottom-text4 h2 fw-bolder text-center">
                            Pellentesque suscipit fringilla libero eu.
                        </div>


                    </div>

                    <div className="Plant-icon">
                        <img src="./images/plant1.png" alt="" style={{ height: "270px", width: "200" }} />
                    </div>

                </div>
                <div
                    className="dropdown-container"
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}>
                    <button className="ending-butto-style">
                        <span>More</span>
                        <AiOutlineArrowRight />
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-content-news" >
                            {/* Add your dropdown content here */}
                            <p style={{ borderBottom: "1px solid #ccc" }}>
                                <button id="myButton" onClick={this.togglePopup} style={{ border: "none", background: "none", cursor: "pointer", display: "inline", color:"black",fontWeight: "bold"}}>Register News</button>
                            </p>
                            <p style={{ borderBottom: "1px solid #ccc" }}>
                                <button id="myButton" onClick={this.togglePopup1} style={{ border: "none", background: "none", cursor: "pointer", display: "inline", color:"black",fontWeight: "bold"}}>News History</button>
                            </p>
                        </div>
                    )}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default News;

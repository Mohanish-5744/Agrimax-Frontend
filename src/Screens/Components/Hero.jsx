import React from 'react'
import './hero.css'
import playImage from '../../assets/image/play.gif';
import grainIcon from '../../assets/image/grain.png';
import farmerAvater from '../../assets/image/farmer_a.png';
import calendarIcon from '../../assets/image/calendar.png';
import landIcon from '../../assets/image/location.png';
import marketIcon from '../../assets/image/market.gif';
import correctIcon from '../../assets/image/correct.svg';
import infectionIcon from '../../assets/image/infection.png';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';


export default function Hero() {

    return (
        <div>
        <div className="hero_container">

            <section className='welcome_sctn'>
                <div className="extra-img-bg"></div>

                <div className="section_container">
                    <div className=" home-text">
                        <div className='slogan_sctn text-wrap'><span className='dark-slogan-text'>Bridging the Gap, Empowering</span>
                            <span className='light-slogan-text'> Farmers</span></div>

                        <div className='mission-text'>
                            <p>Empower your revenue officers with our intuitive website,<br />
                                enabling them to efficiently track and update vital information about farmers, <br />
                                markets, and village operations.</p>
                        </div>

                        <button className="btn btn-primary btn-gradient">
                            <span >About</span> <span className="fw-bolder">AgriMax</span>
                        </button>
                        <img src={playImage} alt="Play" className='play-btn' />
                    </div>
                    <div className="img-bg"></div>
                </div>

                <div className="hero-card-ishubh">

                    <div className="card-ishubh">
                        <div className="card-icon-ishub"><img src={farmerAvater} /></div>
                        <div className="card-content-ishub">
                            <h3 className="card-heading-ishub"><Link to="/Phome" style={{textDecoration:"none"}}>Farmer Detail</Link> </h3>
                            <p className="card-info-ishub">Records of farmer in the village</p>
                        </div>
                    </div>

                    <div className="card-ishubh">
                        <div className="card-icon-ishub"><img src={calendarIcon} /></div>
                        <div className="card-content-ishub">
                            <h3 className="card-heading-ishub">Crop Calender</h3>
                            <p className="card-info-ishub">crops scheduled within compact yearly calendar</p>
                        </div>
                    </div>

                    <div className="card-ishubh">
                        <div className="card-icon-ishub"><img src={marketIcon} /></div>
                        <div className="card-content-ishub">
                            <h3 className="card-heading-ishub">Market Price </h3>
                            <p className="card-info-ishub"> market price projection analysis</p>
                        </div>
                    </div>

                    <div className="card-ishubh">
                        <div className="card-icon-ishub"><img src={landIcon} /></div>
                        <div className="card-content-ishub">
                            <h3 className="card-heading-ishub">Land Detail</h3>
                            <p className="card-info-ishub">Card Info</p>
                        </div>
                    </div>

                    <div className="card-ishubh">
                        <div className="card-icon-ishub"><img src={marketIcon} /></div>
                        <div className="card-content-ishub">
                            <h3 className="card-heading-ishub"><Link to="/Loan">Loan Register</Link></h3>
                            <p className="card-info-ishub">Card Info</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className='second-section'>
                <h1 className='fw-bolder  text-center'>Crop section</h1>
                <div className="section_container">

                    <div className="overview-page">

                        <div className="card-body">
                            <p className="fw-bold h3" style={{ color: "var(  --primary-color)" }}>Explore Comprehensive Information about Crops</p>
                            <p>"Discover in-depth insights and essential information about various crops, including cultivation techniques, growth requirements, and harvest tips for optimal yield.</p>

                            <div className="card-ishubh sub-card mb-1 border-bottom" style={{ boxShadow: "none" }}>
                                <div className="card-icon-ishub"><img src={correctIcon} alt="" /></div>
                                <div className="card-content-ishub">
                                    <h3 className="card-heading-ishub">Organic Farming</h3>
                                    <p className="card-info-ishub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit accusantium, dignissimos nostrum ullam animi ut?</p>
                                </div></div>

                            <div className="card-ishubh sub-card" style={{ boxShadow: "none" }}>
                                <div className="card-icon-ishub"><img src={correctIcon} alt="" /></div>
                                <div className="card-content-ishub">
                                    <h3 className="card-heading-ishub">Homegrown Goodness</h3>
                                    <p className="card-info-ishub">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat vero culpa dolores mi repellendus!</p>
                                </div></div>

                        </div>

                    </div>
                    <div className="sub-option">

                        {/* cards for crop info */}

                        <div className="card-sctn" >
                            <div className="img-icon d-flex justify-content-center align-items-center mb-3">
                                <img className="card-img " src={grainIcon} alt="Card image cap" style={{ height: "80px", width: "80px" }} />
                            </div>
                            <p className="card-text text-center text-white"><h5 className="card-title mb-3 fw-bolder"><Link to="/CropDet" style={{textDecoration:"none", color:"white",fontWeight:"bold",fontSize:"20px"}}>Crop Details</Link></h5>Concise crop overview: essential details and characteristics provided.</p>
                        </div>


                        <div className="card-sctn" >
                            <div className="img-icon d-flex justify-content-center align-items-center mb-3">
                                <img className="card-img " src={infectionIcon} alt="Card image cap" style={{ height: "80px", width: "80px" }} />
                            </div>
                            <p className="card-text text-center text-white"><h5 className="card-title mb-3 fw-bolder">Crop Infection</h5>detection, prevention, and treatment strategies implemented.</p>
                        </div>

                        <div className="card-sctn" >
                            <div className="img-icon d-flex justify-content-center align-items-center mb-3">
                                <img className="card-img " src={grainIcon} alt="Card image cap" style={{ height: "80px", width: "80px" }} />
                            </div>
                            <p className="card-text text-center text-white"><h5 className="card-title mb-3 fw-bolder">Crop Details</h5>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                    </div>
                </div>

            </section>


            </div>
        </div>
    );
}
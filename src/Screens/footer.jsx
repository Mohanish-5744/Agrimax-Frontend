import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="container-fluid justify-content-center">

            <hr className="mx-0 px-0" />
            <footer>
                <div className="row justify-content-around mb-0 pt-5 pb-0 ">
                    <div className="col-11">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-12 font-italic align-items-center  mt-md-3 mt-4">
                                <h5>
                                    <span>
                                        {' '}
                                        <img
                                            src="/images/agrimax.png"
                                            className="img-fluid mb-1 "
                                            alt=""
                                            style={{ width: "70px", height: "80px" }} />
                                    </span>
                                    <b className="text-dark">
                                        {' '}
                                        Agri<span className="text-muted"> Max</span>
                                    </b>
                                </h5>
                                <p className="social mt-md-3 mt-2">
                                    <span>
                                        <FaFacebook />
                                    </span>{' '}
                                    <span>
                                        <FaLinkedin />
                                    </span>{' '}
                                    <span>
                                        <FaTwitter />
                                    </span>{' '}
                                </p>
                                <small className="copy-rights cursor-pointer">&#9400; 2023 Agrimax Indian Agriculture Private Limited</small>
                                <br />
                                <small>Copyright. All Rights Reserved. </small>
                            </div>
                            <div className="col-md-3 col-12  my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4" style={{ color: 'gray', fontFamily: 'Arial', fontSize: '20px' }}>
                                        Our Solution
                                    </li>
                                    <br></br>
                                    <li style={{ color: 'green'}}>Integrated Security Platform</li>
                                    <li style={{ color: 'green'}}>Core Features</li>
                                    <li style={{ color: 'green'}}>Product Features</li>
                                    <li style={{ color: 'green'}}>Pricing</li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                <li className="mt-md-3 mt-4" style={{ color: 'gray', fontFamily: 'Arial', fontSize: '20px' }}>
                                        Your Needs
                                    </li>
                                    <br></br>
                                    <div className='newColor'>
                                    <li style={{ color: 'green'}}>Integrated Security Platform</li>
                                    <li style={{ color: 'green'}}>Core Features</li>
                                    <li style={{ color: 'green'}}>Product Features</li>
                                    <li style={{ color: 'green'}}>Pricing</li>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                <li className="mt-md-3 mt-4" style={{ color: 'gray', fontFamily: 'Arial', fontSize: '20px' }}>
                                       Offer
                                    </li>
                                    <br></br>
                                    <li style={{ color: 'green'}}>Integrated Security Platform</li>
                                    <li style={{ color: 'green'}}>Core Features</li>
                                    <li style={{ color: 'green'}}>Product Features</li>
                                    <li style={{ color: 'green'}}>Pricing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

  

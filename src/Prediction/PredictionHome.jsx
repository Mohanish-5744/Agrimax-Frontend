// Three js 

import React from 'react';
import './predictionHome.css';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import PredictForm from './PredictForm';
// import { Canvas } from '@react-three/fiber';
import Menu1 from './menu1';
// import Footer from '../Screens/footer';

export default class PredicationHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPopupVisible: false
        };
    }
    togglePopup = () => {
        this.setState((prevState) => ({
            isPopupVisible: !prevState.isPopupVisible,
        }));
    };

    render() {

        return (
            <div className='bg-prediction-pd1'>
                    <Menu1></Menu1>   
                <section className='predict_sctn1-pd1'>
                    <div className="blurr_container-pd1">

                        {/* Pop up form */}
                        {this.state.isPopupVisible && (
                            <div id="prediction-form-popup-pd1" className="popup-pd1 position-absolute d-flex flex-column align-items-center" >
                                <div className="pred-container-pd1">
                                    <div className="close-btn-pd1 text-white mx-3 d-flex justify-content-space-between text-centre" onClick={this.togglePopup}>X</div>
                                    <div className="">  <PredictForm /></div>
                                </div>
                            </div>
                        )}
                        <div className="section_container-pd1">
                            <div className=" home-text-pd1">
                                <div className='predict-text-pd1 text-wrap'><span className='light-predict-text-pd1 '>AI-powered </span>
                                    <span className='dark-predict-text-pd1'> Crop Profit Prediction</span></div>

                                <div className="pred-btn-info-dsgn-pd1  d-flex ">

                                    <div className="circle-btn-dsgn-1-pd1">
                                        <div className="circle-btn-dsgn-2-pd1">
                                            <button id='predict-cost-pd1' onClick={this.togglePopup} className="btn-sh1-pd1 ">
                                                <span >Predict </span> <span className="fw-bolder">Cost</span>
                                            </button>
                                        </div></div>

                                    <div className='predict-info-pd1'>
                                        <p>Unleash the Farming Revolution: Harness AI's Power to <br /> Boost Crop Profits! Predict returns and costs, empowering you to  <br />choose the perfect harvest and reap abundant financial rewards in the  <br />ever-evolving world of agriculture.</p>
                                    </div>
                                    <div className="circle-anime-wane1"></div>
                                </div>
                            </div>
                            <div className="prediction-bg-img-pd1"></div>
                        </div>
                    </div>
                </section>
                {/* <Footer></Footer> */}
            </div>
        );
    }
}

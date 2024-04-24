import React from "react"
import './FarmerProfile.css';

const initial = () => {
    return (
        <div>
            <div className="circle-box-center">
                <div className="circle-icon-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{ height: "100px", width: "100px" }}></img>
                </div>
            </div>
            <div className="box-of-text">
                <br></br>
                <lable className="user-Name">USER NAME</lable>
                <br></br>
                <br></br>
                <lable className="user-Type-catagory">Category - Unknown</lable>
            </div>
            <div className="box">
                <div className="area-total-area-land">
                    <label className="value">00</label>
                    <div className="text">
                        Area
                    </div>
                    <div className="line-seperator"></div>
                </div>

                <div className="adhar-number-field">
                    <label className="value">000000000000</label>
                    <div className="text">
                        Adhar Number
                    </div>
                    <div className="line-seperator"></div>
                </div>

                <div className="contact-number-field">
                    <label className="value">0000000000</label>
                    <div className="text">
                        Contact Number
                    </div>
                    <div className="line-seperator"></div>
                </div>
                <div className="line-seperator1"></div>
            </div>
            <br></br>
            <button className="ending-button-farmer">Details</button>
        </div>
    )
}

export default initial
import React from "react";
import './Loan.css'
import Footer from "../Screens/footer";
import TopBar from "../Screens/topbar";
const Loan = () => {
  return (
    <div>
     <TopBar></TopBar>
      <div className="form-box">
        <div className="container-mh">
          <form>
            <div className="fields">
              <div className="input-field">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name" required />
              </div>

              <div className="input-field">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name" required />
              </div>

              <div className="input-field">
                <label>DOB</label>
                <input type="date" placeholder="Enter Your DOB" required />
              </div>

              <div className="input-field">
                <label>Gender</label>
                <input type="text" placeholder="Enter Your Gender" required />
              </div>

              <div className="input-field">
                <label>Nationality</label>
                <input type="text" placeholder="Enter Nationality" required />
              </div>

              <div className="input-field">
                <label>Social Security Number</label>
                <input type="text" placeholder="Enter SSN" required />
              </div>

              <div className="input-field">
                <label>Contact No.</label>
                <input type="text" placeholder="Enter Contact" required />
              </div>

              <div className="input-field">
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" required />
              </div>

              <div className="input-field">
                <label>Address</label>
                <input type="text" placeholder="Enter Your Address" required />
              </div>

              <div className="input-field">
                <label>City</label>
                <input type="text" placeholder="Enter City" required />
              </div>

              <div className="input-field">
                <label>Pincode</label>
                <input type="text" placeholder="Enter Pincode" required />
              </div>

              <div className="input-field">
                <label>Type of Farming</label>
                <input
                  type="text"
                  placeholder="CropFarming, Livestock Farming"
                  required
                />
              </div>

              <div className="input-field">
                <label>Farm Size</label>
                <input type="text" placeholder="In Acres" required />
              </div>

              <div className="input-field">
                <label>Loan Purpose</label>
                <input type="text" placeholder="purpose" required />
              </div>

              <div className="input-field">
                <label>Preferred Loan Term</label>
                <input type="text" placeholder="Loan Term" required />
              </div>

              <div className="input-field">
                <label>Estimated Annual Farm Income:</label>
                <input
                  type="text"
                  placeholder="Enter Annual Income"
                  required
                />
              </div>

              <div className="input-field">
                <label>Estimated Annual Farm Expenses:</label>
                <input
                  type="text"
                  placeholder="Annual Farm Expenses"
                  required
                />
              </div>

              <div className="input-field">
                <label>
                  Do You have any other sources of income besides farming?
                  (Yes/No):
                </label>
                <input type="text" placeholder="" required />
              </div>

              <div className="input-field">
                <label>
                  Are you a member of any agricultural association or
                  organization? (Yes/No):
                </label>
                <input type="text" placeholder="" required />
              </div>

              <div className="input-field">
                <label>Upload Signature</label>
                <input type="file" placeholder="" required />
              </div>

              <div className="input-field">
                <label>Upload 7/12</label>
                <input type="file" placeholder="" required />
              </div>

              <div className="input-field">
                <label>Date of Loan</label>
                <input type="date" placeholder="" required />
              </div>
            </div>

            <div className="apply-now">
              <button className="btntext">Apply now</button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Loan;
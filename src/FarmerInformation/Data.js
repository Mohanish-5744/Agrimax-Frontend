import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import axios from 'axios';
import Phome from '../Profile/Phome';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './RegisterFarm.css'
const DataInsertionPage = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileData = (data) => {
    setFileData(data);
  };

  const insertData = (rowData) => {
    const dataToInsert = {
      id: rowData[0],
      fname: rowData[1],
      lname: rowData[2],
      email: rowData[3],
      adharno: rowData[4],
      crop1: rowData[5],
      crop2: rowData[6],
      crop3: rowData[7],
      address: rowData[8],
      category: rowData[9],
      areainacars: rowData[10],
      areacoordinates: rowData[11],
      contact: rowData[12]
    };

    // Make a POST request to your API endpoint to insert the data
    axios.post('http://localhost:8080/Farmer', dataToInsert)
      .then((response) => {
        console.log('Data inserted successfully');
      })
      .catch((error) => {
        console.error('Error inserting data:', error);
      });
  };

  const handleFileSubmit = () => {
    if (fileData) {
      fileData.forEach((rowData) => {
        insertData(rowData);
      });
      alert('Data inserted successfully');
      // setFileData(null)
      // window.history.back();
    } else {
      alert('No file data available');
    }
  };

  return (
    <div>
      <h2>Insert Data from Excel File</h2>
      <div style={{ marginTop: "40px" }}>
        <CSVReader onFileLoaded={handleFileData}>
        </CSVReader>
      </div>
      {fileData && (
        <div>
          <div className="container-table-nohhr">
            <h2>File Data<small> Farmers</small></h2>
            <ul className="responsive-table">
              <li className="table-header">
                <div className="col col-new2-1">Id</div>
                <div className="col col-new3">First Name</div>
                <div className="col col-new1-2">Last Name</div>
                <div className="col col-new1-1">Email</div>
                <div  className="col col-new1-3">Aadhaar Number</div>
                <div  className="col col-new1-4">Crop 1</div>
                <div  className="col col-new1-4">Crop 2</div>
                <div  className="col col-new1-5">Crop 3</div>
                <div  className="col col-new1-4">Address</div>
                <div className="col col-new1-4">Category</div>
                <div className="col col-new1-8">Area</div>
                <div className="col col-new1-4">Location</div>
                <div >Contact</div>
              </li>

              {fileData.map((rowData, index) => (
                <li className="table-row" key={index}>
                  <div className="col col-new1" >{rowData[0]}</div>
                  <div className="col col-new2" >{rowData[1]}</div>
                  <div className="col col-new3" >{rowData[2]}</div>
                  <div className="col col-new5" >{rowData[3]}</div>
                  <div className="col col-new4-1" >{rowData[4]}</div>
                  <div className="col col-new4" >{rowData[5]}</div>
                  <div className="col col-new4" >{rowData[6]}</div>
                  <div className="col col-new4" >{rowData[7]}</div>
                  <div className="col col-new4" >{rowData[8]}</div>
                  <div className="col col-new4-2" >{rowData[9]}</div>
                  <div className="col col-new1" >{rowData[10]}</div>
                  <div className="col col-new4" >{rowData[11]}</div>
                  <div  >{rowData[12]}</div>
                </li>
              ))}
            </ul>
          </div>


          <br></br>
        </div>
      )}
      <button onClick={handleFileSubmit}>Insert Data</button>
    </div>
  );
};

export default DataInsertionPage;

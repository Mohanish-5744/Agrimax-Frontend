import React, { useState } from 'react';
import FarmerRegisterService from './FarmerRegisterService';
import './RegisterFarm.css';

// import background from './crop-dec.png'
const divStyles = {
    boxShadow: '6px 2px 10px black',
    margin: '4em',
    padding: '1em',
    borderRadius: '20px',
};
export default function RegisterFarmer(props) {
    const [formData, setFormData] = useState({
        id: '',
        fname: '',
        lname: '',
        address: '',
        crop1: '',
        crop2: '',
        crop3: '',
        email: '',
        adharno: '',
        areacoordinates: '',
        areainacars: '',
        category: '',
        Peronalcontact: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your submit logic here, e.g., make an API request to save the data
        console.log(formData);
        // Reset the form
        console.log(formData.Peronalcontact);
        FarmerRegisterService.InsertFarmer(
            formData.id,
            formData.fname,
            formData.lname,
            formData.address,
            formData.crop1,
            formData.crop2,
            formData.crop3,
            formData.email,
            formData.adharno,
            formData.areacoordinates,
            formData.areainacars,
            formData.Peronalcontact,
            formData.Peronalcontact,
            formData.formData
        ).then((response) => {
            alert('Data inserted successfully');
          })
          .catch((error) => {
            alert('Error inserting data:');
          });
    };
    return (
        <>
            <div className="container mt-5" style={divStyles}>

                <h1 className="mb-3 text-center" style={{ color: "green", }}>Farmer Registeration</h1>

                <form onSubmit={handleSubmit}>
                    <div className="contact_form d-flex justify-content-between align-items-between">

                        <div className="mx-2">
                            <label className="form-label" htmlFor="id1">
                                ID
                            </label>
                            <input className="form-control" type="number" id="id1" placeholder="1" required name="id" value={formData.id} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="first_name66">
                                First Name
                            </label>
                            <input className="form-control" type="text" id="first_name66" required placeholder="Jon"  name="fname" value={formData.fname} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="last_name65">
                                Last Name
                            </label>
                            <input className="form-control" type="text" id="last_name65" placeholder="ELe" required name="lname" value={formData.lname} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="phone88">
                                Phone Number
                            </label>
                            <input className="form-control" type="number" id="phone88" placeholder="+91 12345" required name="Peronalcontact" value={formData.Peronalcontact} onChange={handleChange}/>
                        </div>



                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="address66">
                            Address
                        </label>
                        <textarea className="form-control" id="address66" rows={3} placeholder="Write your Address.." required name="address" value={formData.address} onChange={handleChange}/>
                    </div>
                    <div className="contact_form d-flex justify-content-between align-items-between">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="crop">
                                Crop-1
                            </label>
                            <input className="form-control" type="text" id="crop1-23" placeholder="Tomato" required name="crop1" value={formData.crop1} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="crop">
                                Crop-2
                            </label>
                            <input className="form-control" type="text" id="crop2-23" placeholder="Onion" required name="crop2" value={formData.crop2} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="crop">
                                Crop-3
                            </label>
                            <input className="form-control" type="text" id="crop3-23" placeholder="Garlic" required name="crop3" value={formData.crop3} onChange={handleChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="email">
                                Email
                            </label>
                            <input className="form-control" type="email" id="email45" placeholder="abc@gmail.com" required name="email" value={formData.email} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="contact_form d-flex justify-content-between align-items-between">
                        <div className="mx-2">
                            <label className="form-label" htmlFor="an-number">
                                Aadhar Number
                            </label>
                            <input className="form-control" type="number" id="an-number" placeholder="Enter 12-Digit number" required name="adharno" value={formData.adharno} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="area-c28">
                                Area Coordinates
                            </label>
                            <input className="form-control" type="text" id="area-c28" required placeholder="" name="areacoordinates" alue={formData.areacoordinates} onChange={handleChange}/>
                        </div>

                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="area_acres34">
                                Area in Acres
                            </label>
                            <input className="form-control" type="number" id="area_acres34" placeholder="" required name="areainacars" value={formData.areainacars} onChange={handleChange}/>
                        </div>
                        <div className="mb-3 ">
                            <label className="form-label" htmlFor="category44">
                                Category
                            </label>
                            <input className="form-control" type="text" id="category44" placeholder="" required name="category" value={formData.category} onChange={handleChange}/>
                        </div>



                    </div>


                    <div className="button" >
                        <button className="btn btn-success" id="submit33" style={{ alignContent: 'center' }} type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>


    )
}
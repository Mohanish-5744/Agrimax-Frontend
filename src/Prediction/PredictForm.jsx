// PredictForm.js
import React from 'react';
import './PredictForm.css';
import { Link, useNavigate } from 'react-router-dom';
import PredictionService from './PredictionService';

export default function PredictForm() {
    const [state, setState] = React.useState({
        crop1: '',
        lArea1: '',
        crop2: '',
        lArea2: '',
        crop3: '',
        lArea3: '',
        locationId: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const navigate = useNavigate(); // Access the navigate function using the useNavigate hook

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        console.log(state.crop1);
        PredictionService.getUsers(
            state.crop1,
            state.crop2,
            state.crop3,
            state.lArea1,
            state.lArea2,
            state.lArea3,
            state.locationId
        ).then((response) => {
            console.log(response.data);
            navigate('/predictionResult', { state: response.data });
        });
    };

    return (
        <div className='pred-form-container'>
            <h5 className='text-center'>Land and Region Details form</h5>

            <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center '>
                <div>
                    <label htmlFor='crop1'>First crop:</label>
                    <input
                        type='text'
                        name='crop1'
                        placeholder='Enter the crop name'
                        value={state.crop1}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='lArea1'>Area of Land (in sq. ft):</label>
                    <input
                        type='number'
                        name='lArea1'
                        placeholder='Enter area of land (sq. ft)'
                        value={state.lArea1}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='crop1'>Second crop:</label>
                    <input
                        type='text'
                        name='crop2'
                        placeholder='Enter the crop name'
                        value={state.crop2}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='lArea1'>Area of Land (in sq. ft):</label>
                    <input
                        type='number'
                        name='lArea2'
                        placeholder='Enter area of land (sq. ft)'
                        value={state.lArea2}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='crop1'>Third crop:</label>
                    <input
                        type='text'
                        name='crop3'
                        placeholder='Enter the crop name'
                        value={state.crop3}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='lArea1'>Area of Land (in sq. ft):</label>
                    <input
                        type='number'
                        name='lArea3'
                        placeholder='Enter area of land (sq. ft)'
                        value={state.lArea3}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='locationId'>
                        Location:
                    </label>
                    <input
                        type="text"
                        name="locationId" placeholder='Enter the location'
                        value={state.locationId}
                        onChange={handleChange}
                    />
                </div>
               
                <button type='submit' className='submit-btn px-4 my-2'>
                    Submit
                </button>
            </form>
        </div>
    );
}

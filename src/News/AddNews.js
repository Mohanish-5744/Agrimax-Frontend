import React, { useState } from 'react';
import AddNewsServices from './AddNewsServices';

const AddNews = () => {
    const [formData, setFormData] = useState({
        id: '',
        heading: '',
        date: '',
        publisherName: '',
        discription: ''
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
        AddNewsServices.InsertNews(
            formData.id,
            formData.heading,
            formData.date,
            formData.publisherName,
            formData.discription
        ).then((response) => {
            alert('Data inserted successfully');
        })
            .catch((error) => {
                console.error('Error inserting data:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">ID:</label>
            <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
            />

            <label htmlFor="fname">Heading:</label>
            <input
                type="text"
                id="fname"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
            />

            <label htmlFor="lname">Date:</label>
            <input
                type="text"
                id="lname"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />

            <label htmlFor="address">publisherName:</label>
            <input
                type="text"
                id="address"
                name="publisherName"
                value={formData.publisherName}
                onChange={handleChange}
            />

            <label htmlFor="address">Description:</label>
            <input
                type="text"
                id="address"
                name="discription"
                value={formData.discription}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddNews;

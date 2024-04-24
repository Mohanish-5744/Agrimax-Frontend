import React, { useState } from 'react';
import background from "../assets/image/crop_background.png"
import crop1 from "../../src/assets/image/crop1.png"
import crop2 from "../../src/assets/image/crop11.jpg"
import crop3 from "../../src/assets/image/crop3.jpg"
import crop4 from "../../src/assets/image/Onions.jpg"
import crop5 from "../../src/assets/image/cabbage.jpeg"
import crop6 from "../../src/assets/image/cabbage1.jpg"
import './cropDetails.css'
import './searchBar.css'
import axios from 'axios'
import CropService from './CropService'
import TopBar from '../Screens/topbar';
import Footer from '../Screens/footer';
import Tomato from "../../src/assets/image/Tomato.png";
import background1 from '../../src/assets/image/crop-fieldx.jpg'
import "./cropTable-style.css";

export default function CropDet() {

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showResults, setShowResults] = useState(false); // Add state to control showing/hiding results
    const [Users, setUsers] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length >= 1) {
            fetchSuggestions(value);
        } else {
            setSuggestions([]);
        }
    };

    const fetchSuggestions = async (value) => {
        try {
            const response = await axios.get(`http://localhost:8080/CropInfo?name=${value}`);
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleItemClick = (name) => {
        setQuery(name);
        setSuggestions([])
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the search or any other action here
        console.log('Search submitted:', query);
        CropService.getUsers(query)
            .then((response) => {
                console.log(response.data);
                setUsers(response.data);
                setSuggestions([]);
                setShowResults(true); // Show the search results when data is fetched
            })
            .catch((error) => {
                console.error('Error updating user:', error);
                alert("No record Found");
            });
    };

    const setBackPage = (event) => {
        event.preventDefault()
        setShowResults(false);
    }

    return (
        <div>
            <TopBar></TopBar>


            {showResults && (
                <div>
                    <div className="image">
                        <img className="background-img" src={background1} alt="#" />
                    </div>
                    <div className="text-background">
                        <h1 className="text-center ">Crop Detail</h1>
                        <p className="text-center">This section presents information about individual crops</p>
                    </div>
                    <div className="container1">
                        <div className="crop-info22" style={{ margin: "23px" }}>

                            <div className="text-container1">
                                <div className="text-box">
                                    <h1>Name: {Users.name}</h1>
                                    <h3 className="sub-text" style={{ color: "gray" }}> Scientific Name : {Users.sciname}</h3>

                                    <form>
                                        <div class="Dec-text my-3">
                                            <div className="dec-text">
                                                <label for="exampleFormControlTextarea1">
                                                    <h3 style={{ color: "green" }}>Description</h3>
                                                </label>
                                                <br />
                                                {Users.description}
                                                <br></br>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Quia impedit ullam, quis quo labore soluta fugit
                                                voluptatibus nisi fuga libero totam amet doloribus ex minus
                                                aut minima beatae error A crop is a plant that can be grown
                                                and harvested extensively for profit or subsistence.[1] When
                                                the plants of the same kind are cultivated at one place on a
                                                large scale, it is called a crop. Most crops are cultivated
                                                in agriculture or hydroponics. Crops may include macroscopic
                                                fungus (e.g. mushrooms) and marine macroalga (e.g. seaweed),
                                                some of which
                                                <br></br>
                                            </div>
                                        </div>
                                        <h4 className="sub-text">

                                            <div className="button-box">

                                                <button class="button12">Season: {Users.season}</button>

                                            </div>


                                        </h4>
                                        <h4 className="sub-text">

                                            Infection : {Users.infection}


                                        </h4>
                                    </form>
                                </div>
                                <div className="container-img1">
                                    <img src={Tomato} alt="img" />
                                </div>

                            </div>
                        </div>
                    </div>
                    <button onClick={setBackPage}>Back</button>
                </div>
            )}

            {!showResults && (
                <div>

                    <div className="image-shri">
                        <div className="slogan-text-background-shri d-flex flex-column justify-content-centre align-items-centre">
                            <h1 className="text-center display-3 fw-bold">Crop Information</h1>
                            <div className="text-center display-4">This section presents information about individual crops</div>
                        </div>

                        <img className="background-img-shri" src={background} alt="#" />
                    </div>

                    <section className='crop-sectn-shri'>
                        <div className="post_crop-shri text-center">
                            <h1>Popular Crops</h1>
                            <p>Get the detailed information about crops</p>



                            <div className="crop-info-shri">
                                <div className="first_crop-info-shri">
                                    <h1>Fresh Ginger</h1>
                                    <p>Indian onions Exportable varieties mainly produce in Nasik & Pune
                                        District of Maharashtra. We have mainly Three Crops as follows: 1.
                                        Winter Crop (November to January) 2. Late winter Crop (available
                                        during January/February to March) 3. Summer Crop available from April
                                        To June/July thence stored & supply until September/October) FYI,
                                        Summer Crop quality is more resistive and durable than winter crop,
                                        hence stored and supplied for a period 4 to 5 months. Onions being
                                        perishable item, we have to be careful for selecting, grading, packing
                                        and stuffing the container when shipment is under process.</p>

                                </div>
                                <div className="image1-shri ">
                                    <img className="mx-2" src={crop1} alt="img" />
                                    <img src={crop2} alt="img" />
                                </div>
                            </div>
                            <div className="crop-info-shri">
                                <div className="image2-shri mx-3 ">
                                    <img className="-shri mx-2" src={crop3} alt="img" />
                                    <img className="-shri" src={crop4} alt="img" />
                                </div>

                                <div className="second_crop-info-shri mx-5">
                                    <h1> Fresh Onion</h1>
                                    <p>Indian onions Exportable varieties mainly produce in Nasik & Pune
                                        District of Maharashtra. We have mainly Three Crops as follows: 1.
                                        Winter Crop (November to January) 2. Late winter Crop (available
                                        during January/February to March) 3. Summer Crop available from April
                                        To June/July thence stored & supply until September/October) FYI,
                                        Summer Crop quality is more resistive and durable than winter crop,
                                        hence stored and supplied for a period 4 to 5 months. Onions being
                                        perishable item, we have to be careful for selecting, grading, packing
                                        and stuffing the container when shipment is under process.</p>

                                </div>

                            </div>
                            <div className="crop-info-shri">
                                <div className="first_crop-info-shri">
                                    <h1>Fresh Cabbage</h1>
                                    <p>Indian onions Exportable varieties mainly produce in Nasik & Pune
                                        District of Maharashtra. We have mainly Three Crops as follows: 1.
                                        Winter Crop (November to January) 2. Late winter Crop (available
                                        during January/February to March) 3. Summer Crop available from April
                                        To June/July thence stored & supply until September/October) FYI,
                                        Summer Crop quality is more resistive and durable than winter crop,
                                        hence stored and supplied for a period 4 to 5 months. Onions being
                                        perishable item, we have to be careful for selecting, grading, packing
                                        and stuffing the container when shipment is under process.</p>

                                </div>
                                <div className="image1-shri ">
                                    <img className="mx-2" src={crop5} alt="img" />
                                    <img src={crop6} alt="img" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <form onSubmit={handleSubmit}>
                        <div className="wrap">
                            {suggestions.length > 0 && (
                                <ul className="suggestions-ul">
                                    {suggestions.map((fruit) => (
                                        <li className="suggestion-li" key={fruit.id} onClick={() => handleItemClick(fruit.name)}>
                                            {fruit.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="search-box-crop">
                            <input type="text" placeholder="Search Information" value={query} onChange={handleInputChange} style={{ zIndex: "3" }} />
                            <button>Search</button>
                        </div>
                    </form>
                </div>

            )}
            <Footer></Footer>
        </div>
    )
}

import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm';
import DisplayData from './DisplayData';
import { apiKey } from '../API';
import axios from 'axios';

function ProjectPortfolio() {

    //Getting user search term into state
    const [location, setLocation] = useState('');

    //State for Current Weather Data
    const [data, setData] = useState(null);

    //State for Weather Forcast
    const [forecastData, setForecastData] = useState(null);


    //API Request URLs
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;


    useEffect(() => {
        handleSubmit();
    }, []);

    //Get search term from user input and set to state
    const handleChange = (event) => {

        setLocation(event.target.value);
    }

    //function to handle submiting user query
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
       const response = await axios.get(weatherURL)
                setData(response.data);
                console.log(response.data)
        } catch(error) {
                console.log(error);
            }

        try {
        const res = await axios.get(forecastURL)
                setForecastData(res.data);
                console.log(res.data)
        } catch(error) {
                console.log(error);
            }
        
            setLocation('');
    }

    
    return (
        <div>
            <SearchForm
                location={location}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <DisplayData
                data={data}
            />
        </div>
        
    )
}

export default ProjectPortfolio;
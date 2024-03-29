import React, {useState} from 'react';
import SearchForm from './SearchForm';
import DisplayData from './DisplayData';
import { apiKey } from '../API';
import axios from 'axios';

function ProjectPortfolio() {

    //Getting user search term into state
    const [location, setLocation] = useState('');

    //State for Current Weather Data
    const [data, setData] = useState({});

    //State for Weather Forcast
    const [forecastData, setForecastData] = useState({});


    //API Request URLs
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

    //Get search term from user input and set to state
    const handleChange = (event) => {
        const location = event.target.value;
        console.log(location);

        setLocation(location);
    }

    //function to handle submiting user query
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("clicked"); 

        axios.get(weatherURL)
            .then((response) => {
                setData(response.data);
                console.log(response.data)
        })
            .catch(error => {
                console.log(error);
            });
        
        axios.get(forecastURL)
            .then((res) => {
                setForecastData(res.data);
                console.log(res.data)
        })
            .catch(error => {
                console.log(error);
            });
        
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
                forecastData={forecastData}
            />
        </div>
        
    )
}

export default ProjectPortfolio;
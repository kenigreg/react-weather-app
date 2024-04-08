import React from 'react';
import "./DisplayData.css";

function DisplayData(props) {

    //Setting Weather data to local storage
    if (props.data){
        localStorage.setItem('data', JSON.stringify(props.data));
    }
    
    // Getting Weather data prop local storage
    const weatherData = JSON.parse(localStorage.getItem('data'))

    console.log(weatherData);
    
    //Bootstrap Icon Variables

    let icon;
    const Clouds = {iconLogo: "bi bi-cloud", d: "M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"};
    const Rain = {iconLogo: "bi bi-cloud-rain", d: "M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 0 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317m.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"};
    const Clear = {iconLogo: "bi bi-sun", d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"};
    const Smoke = {iconLogo: "bi bi-cloud-haze-fill", d: "M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"};
    const Drizzle = {iconLogo: "bi bi-cloud-drizzle", d: "M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973M8.5 2a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 2"};
    const Mist = {iconLogo: "bi bi-cloud-haze-fill", d: "M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973"};

    function getIcon() {
        if (!weatherData) {
            icon = null;
        }
   if (weatherData.weather[0].main === "Clouds") {
        icon = Clouds;
    } else if (weatherData.weather[0].main === "Rain") {
        icon = Rain;
    } else if (weatherData.weather[0].main === "Clear") {
        icon = Clear;
    } else if (weatherData.weather[0].main === "Smoke") {
        icon = Smoke;
    } else if (weatherData.weather[0].main === "Drizzle") {
        icon = Drizzle;
    } else {
        icon = Mist;
        } 
    }
    if (weatherData){
        getIcon();
    }

    // Show loading text until weather data are fetched
    if (!weatherData) return <div className="display max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">Loading...</div>;

    // Render the Weather details
    return (
       
        <div>
            <div className="display max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <svg className={icon.iconLogo} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
            <path d={icon.d}/>
            </svg>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{weatherData.name}, {weatherData.sys.country} <span>{"  "} {weatherData.main.temp} {"°C"}</span></h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{weatherData.weather[0].description}</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{weatherData.main.temp_max} {"  /"} {weatherData.main.temp_min} <span>{"  "} Feels like {weatherData.main.feels_like} {"°C"}</span></p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Wind: { weatherData.wind.speed} m/s</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Humidity: { weatherData.main.humidity} %</p>

            </div>
           
        </div>

    )
}

export default DisplayData;
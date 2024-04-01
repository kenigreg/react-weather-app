import React from 'react';
import "./DisplayData.css";

function DisplayData(props) {

    /* 
    localStorage.setItem('data', JSON.stringify(data));

    const weatherData = JSON.parse(localStorage.getItem('data'))
    */
    
    //Bootstrap Icon Variables
    const Clouds = "bi bi-cloud";
    const Rain = "bi bi-cloud-rain";
    const Clear = "bi bi-sun";
    const Smoke = "bi bi-cloud-haze-fill";
    const Drizzle = "bi bi-cloud-drizzle";
    const Mist = "bi bi-cloud-haze-fill";

    return (
       
<div className="display max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg className={Smoke} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
            </svg>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{props.data.name}, {props.data.sys.country} <span>{"  "} {props.data.main.temp} {"°C"}</span></h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.data.weather[0].description}</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.data.main.temp_max} {"  /"} {props.data.main.temp_min} <span>{"  "} Feels like {props.data.main.feels_like} {"°C"}</span></p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Wind: { props.data.wind.speed} m/s</p>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Humidity: { props.data.main.humidity} %</p>
</div>

    )
}

export default DisplayData;
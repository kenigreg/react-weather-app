import React from "react";
import dayjs from 'dayjs';

function DisplayForecast(props) {

    //Setting Weather data to local storage & Getting Weather data from local storage
     let forecastWeatherData;
    if (props.forecastData){
        localStorage.setItem(`forecastdata_${props.forecastData.city.name}`, JSON.stringify(props.forecastData));
    }
    
    if (props.forecastData) {
        forecastWeatherData = JSON.parse(localStorage.getItem(`forecastdata_${props.forecastData.city.name}`))
    }
    
    // Show waiting for data until weather data are fetched
    if (!forecastWeatherData) return (<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                Waiting for weather forecast data...
                </th>
            </tr>
        </thead>
        </table>
    </div>
)
    return (
        
        <div>
            <h1>5 Day Forecast:</h1>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Temp
                </th>
                <th scope="col" className="px-6 py-3">
                    Weather Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Humidity
                </th>
                <th scope="col" className="px-6 py-3">
                    Wind
                </th>
            </tr>
        </thead>
                <tbody>
                        {forecastWeatherData.list.map((item, index) =>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.dt_txt}
                            </th>
                            <td className="px-6 py-4">
                                {item.main.temp} {"°C"}
                            </td>
                            <td className="px-6 py-4">
                            
                            {item.weather[0].description}
                            </td>
                            <td className="px-6 py-4">
                            {item.main.humidity} %
                            </td>
                            <td className="px-6 py-4">
                            {item.wind.speed} m/s
                            </td>
                        </tr>
                    )}
            
        </tbody>
    </table>
    </div>
</div>

    )
}

export default DisplayForecast;
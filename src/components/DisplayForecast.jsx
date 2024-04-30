import React, {useState} from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
//import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { Container } from '@mui/material';
import "./DisplayForecast.css";

import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

function DisplayForecast(props) {

    //state for selected date to filter data
    const [value, setValue] = useState([
        dayjs('17-04-2022'),
        dayjs('21-04-2022'),
    ]);

    // State for filtered data
    const [isFiltered, setIsFiltered] = useState(false);

  
    //Getting Weather data from local storage
     let forecastWeatherData;
    
    if (props.forecastData) {
        forecastWeatherData = JSON.parse(localStorage.getItem(`forecastdata_${props.forecastData.city.name}`))
       
    }

    //Filter forecast data based on user date selection
    
    let date1, date2;

    if (value) {
    date1 = value[0].format('YYYY-MM-DD')
    date2 = value[1].format('YYYY-MM-DD')
    }
    
    //variable to store filtered data
    const forecastWeatherData2 = [];

    if (isFiltered) {
        forecastWeatherData.list.filter((item) => {
          const itemDate = dayjs(item.dt * 1000).format('YYYY-MM-DD');
        //filter through the data and compare if date in each data is within the user input
            if (dayjs(itemDate).isBetween(date1, date2, null, '[]')) {
                forecastWeatherData2.push(item);
            } else {
                return forecastWeatherData;
            }
        })
    }

    //get current date
    const now = dayjs();
    const currentDate = now.format('YYYY-MM-DD');
    const endDate = now.add(5, 'day').format('YYYY-MM-DD');
    
    

    //function to handle user input to filter weather forecast data by date
    const handleChange = ((newValue) => {
        const userDate1 = newValue[0].format('YYYY-MM-DD');
        const userDate2 = newValue[1].format('YYYY-MM-DD');
        
        if (!(dayjs(userDate1).isBetween(currentDate, endDate, null, '[]')) || !(dayjs(userDate2).isBetween(currentDate, endDate, null, '[]'))) {
            alert("please select a date between today and 5 days ahead");
        } else
        {
        setValue(newValue);
            setIsFiltered(true);
        }
    })


    
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
    <Container maxWidth="sm"> 
    <LocalizationProvider className="dateRange" dateAdapter={AdapterDayjs} adapterLocale="en-gb">
    <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        <DemoItem label="Filter by date" component="DateRangePicker">
          <DateRangePicker
            value={value}
            onChange={handleChange}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </Container>
            
    <h1>5 Day Forecast:</h1>
    <div className="forecastTable relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Date
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
                { !isFiltered ? (forecastWeatherData.list.map((item, index) =>
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
                        )
                        ) :
                            (
                                forecastWeatherData2.map((item, index) =>
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
                                    )
                                    
                            )
            }
        </tbody>
    </table>
    </div>
</div>

    )
}

export default DisplayForecast;
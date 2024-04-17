//import React from 'react';
import React, {useState} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Container } from '@mui/material';
import { apiKey } from '../API';
import axios from 'axios';
import "./PlanTrip.css";


function PlanTrip() {

    const [value, setValue] = useState([
        dayjs('17-04-2022'),
        dayjs('21-04-2022'),
    ]);
    
    //API Request URLs
    const climateURL = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${location}&appid=${apiKey}&units=metric`;


    return (
     <Container fluid>  
<div className='calendarHeading'>    
<h1>Search for weather forecast within a 30 day period</h1>
</div>        
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
      <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
        <DemoItem label="Choose a date range" component="DateRangePicker">
          <DateRangePicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
 
    </Container>
    )
}
    export default PlanTrip;
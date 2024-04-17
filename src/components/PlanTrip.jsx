//import React from 'react';
import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Container } from '@mui/material';
import { apiKey2 } from '../API';
import axios from 'axios';
import "./PlanTrip.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function PlanTrip() {

    const [value, setValue] = useState([
        dayjs('17-04-2022'),
        dayjs('21-04-2022'),
    ]);

    //Getting user search term into state
    const [location, setLocation] = useState('');

    //State for Climate Data
    const [climateData, setClimateData] = useState(null);

    
    //API Request URLs
    const climateURL = `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${location}&appid=${apiKey2}&units=metric`;

    useEffect(() => {
        handleSubmit();
    }, []);

    //function to handle submiting user query
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(climateURL)
            console.log(response.data)
                setClimateData(response.data);
                
        } catch(error) {
                console.log(error);
        }
        setLocation('');
    }



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
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <TextField required id="outlined-required" type="search" label="Enter a city name" variant="outlined" value={location}
        onChange={(event) => {
            setLocation(event.target.value);
        }}/>
      
    </Box>
    <Button variant="contained" onClick={handleSubmit}>
        Search
    </Button>

    </Container>
   
    )
}
    export default PlanTrip;
import React from 'react';

import "./result.css";

export default function ResultBar({ data }) {
  
  

       
  

    // Check if data is available and valid
    if (!data) {
        return 
        
    }

    if (data.error) {
        return (
            <div style={{  transition: "ease-in-out 0.5s",   boxShadow: "0px 5px 20px 2px white",borderRadius: "10px", width: "300px", height: "300px", padding:"20px" }}>
                <p style={{ color: 'red' }}>Error fetching weather data: {data.error.message}</p>
            </div>
        
        );
    }

    return (
        <div className='result-wrapper'>
            
           <div className='result-box'>
                <h2 style={{ color: 'white' , fontSize:"30px"}}>Weather in {data.location.name}</h2>
                <p style={{ color: 'white', fontSize: "19px", marginTop: "1rem" }}>Country : {data.location.country}</p>
                <p style={{ color: 'white', fontSize: "19px" }}>Temperature: {data.current.temp_c}°C</p>
                <p style={{ color: 'white', fontSize: "19px" }}>Condition: {data.current.condition.text}</p>
                <img style={{width:"50%", height: "150px"}} src={data.current.condition.icon} alt="Weather icon" />
            </div>

            <div className='result-box box'>
                 <h1 style={{ color:"white"}}>{data.location.name}</h1>
                <p style={{ color: 'white', fontSize: "19px", marginTop: "1rem"}}>Current Date and Time:  {data.location.localtime}</p>
                <p style={{ color: 'white', fontSize: "19px" }}>Region : {data.location.tz_id}</p>
                <p style={{ color: 'white', fontSize: "19px" }}>Wind: {data.current.wind_mph}</p>
                <p style={{ color: 'white', fontSize: "19px" }}>Humidity: {data.current.humidity}</p>
            </div>
        </div>
    );
}

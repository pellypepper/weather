import React, { useState } from "react";
import Wallpaper from "../util/wallpaper";
import NavBar from "./navbar";
import Weather from "../weather";
import './forecast.css'; // Import the CSS file

export default function Forecast() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setInput(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(""); // Reset error on each submit
        setLoading(true); // Set loading to true
        try {
            const data = await Weather.fetchForecast(input);
            if (data.error) {
                setError(data.error.message || "Could not fetch weather data");
                setResult(null);
            } else {
                setResult(data);
            }
        } catch (err) {
            setError("An error occurred while fetching data.");
            setResult(null);
        } finally {
            setLoading(false); // Turn off loading state
        }
        setInput("");
    }

    return (
        <div style={{backgroundColor: "#222222",height:"max-content",overflow:"hidden", position: "relative"}}>
        <>
     
            <Wallpaper style={{height: ""}}>
                    <div style={{width:"100%" , scrollBehavior:"smooth" }}>
                        <NavBar />
                
                        <div style={{marginTop:"1rem", padding:"20px"}}>
                            <h1 style={{ color: "white", zIndex: 1, position: "relative", marginLeft: "2rem"}}>Forecast</h1>
                            
                            <form onSubmit={handleSubmit} style={{ marginTop: "20px", color: "white", marginLeft: "2rem" }}>
                                <input 
                                    onChange={handleChange}  
                                    value={input} 
                                    placeholder="Enter location" 
                                    style={{ padding: "5px", marginRight: "10px", borderRadius: "4px" }} 
                                />
                                <button style={{ padding: "5px 10px", borderRadius: "4px" }}>Check Weather</button>
                            </form>
                            
                            {loading && <p style={{ color: "white", marginTop: "10px" }}>Loading...</p>}
                            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
                            
                            {result && !error && (
                                <div style={{ 
                                    color: "white", 
                                    padding: "20px",
                                    borderRadius: "8px", 
                                    backgroundColor: "inherit",
                                    width: "90%",
                                    height: "max-content",
                                    margin: "20px auto",
                                    border: "2px solid white"
                                }}>
                                    <h2>Weather in {result.location?.name}, {result.location?.country}</h2>
                                    <p>Temperature: {result.current?.temp_c}°C</p>
                                    <p>Condition: {result.current?.condition?.text}</p>
                                    <img src={result.current?.condition?.icon} alt="Weather icon" style={{ width: "50px", height: "50px" }} />
                                    
                                    <h3>Forecast:</h3>
                                    <div className="forecast-container">
                                        {result.forecast?.forecastday.map((day) => (
                                            <div key={day.date} className="forecast-box">
                                                <h4>{day.date}</h4>
                                                <p>Sunrise: {day.astro?.sunrise}</p>
                                                <p>Sunset: {day.astro?.sunset}</p>
                                                <p>Max Temp: {day.day?.maxtemp_c}°C</p>
                                                <p>Min Temp: {day.day?.mintemp_c}°C</p>
                                                <p>Condition: {day.day?.condition?.text}</p>
                                                <img src={day.day?.condition?.icon} alt="Weather icon" />
                                            </div>
                                        ))}

                                        {result.alerts?.alert.map((alert) => (
                                            <div key={alert.headline} className="alert-box">
                                                <h4>Alert: {alert.headline}</h4>
                                                <p>{alert.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
               
                    </div>
                    </Wallpaper>
        
        </>
        </div>
    );
}

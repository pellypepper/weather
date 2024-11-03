// App.js
import React, { useEffect, useState } from 'react';
import Background from './util/background';
import SearchBar from './component/searchbar';
import ResultBar from './component/resultbar';
import Weather from './weather';
import NavBar from './component/navbar';

import "./index.css";

function App({word}) {

const [data, setData] = useState(null);


    async function verifyURL(input) {
        const weatherData = await Weather.fetchCurrentWeather(input); // Fetch current weather data
        if (weatherData && !weatherData.error) {
            // Only update history if there is valid data
         
            setData(weatherData); // Set the current weather data
        } else {
            console.error("Error fetching weather data:", weatherData.error); // Handle API errors
        }
    }
    
    const [displayedValue, setDisplayedValue] = useState('');
    const [index, setIndex] = useState(0);
    const letterDelay = 50; // Time between letters in milliseconds

    useEffect(() => {
        if (index < word.length) {
            const interval = setTimeout(() => {
                setDisplayedValue((prev) => prev + word[index]);
                setIndex((prev) => prev + 1);
            }, letterDelay);

            return () => clearTimeout(interval); // Clear timeout on unmount or before next render
        }
        // Reset when the word is completely displayed
        else if (index === word.length) {
            const resetTimeout = setTimeout(() => {
                setDisplayedValue(''); // Clear displayed letters
                setIndex(0); // Reset index
            }, letterDelay); // Time before restarting

            return () => clearTimeout(resetTimeout); // Cleanup reset timeout
        }
    }, [index, word]);


    return (
       <div style={{width:"100%",height:"150vh", overflow:"hidden" ,position:'relative'}}>
         <>
         <NavBar />
            <Background style={{height:"150vh"}}  >
            <div className='wrapper' >
          
              <div style={{textAlign:"center", marginTop:"2rem",height:"max-content", padding:10, width:"100%"}}>
              <h1  className='image-text'>{displayedValue}</h1>;
              </div>
                <SearchBar verifyURL={verifyURL} />
                <ResultBar data={data}  /> {/* Pass history to ResultBar if needed */}
            </div>
            </Background  >
        </>
       </div>
    );
}

export default App;

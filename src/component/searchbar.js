
import React from "react";
import "./searchbar.css";

export default function SearchBar({verifyURL}) {
   
   
    const [input, setInput] = React.useState("");

    function handleChange(event) {
      setInput(event.target.value);
   ;
    }
    
    function handleSubmit(event) {
      event.preventDefault();
      verifyURL(input)
      setInput("");
  
    }
   


  return (
    <div className="search-wrapper" >
     <form className="search-form" onSubmit={handleSubmit} >
     <input className="search-input" onChange={handleChange} value={input} type="text" placeholder="Enter your City, US Zipcode, UK Postcode or  Canada Postalcode. " />
      <button className="search-button" type="submit" >Check Your Weather</button>
     </form>
    </div>
  );
}
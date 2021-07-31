import React from "react";
import CountryDetails from "./CountryDetails";

const Countries = ({setCountry,country,listCountries}) =>{
    
    const countriesToShow=listCountries.filter((cou)=>cou.name.toLowerCase().includes(country.toLowerCase()))

    return(
        <div>
            {
                countriesToShow.length===1 
                ? <CountryDetails country={countriesToShow[0]}/>     // This will be display if countriesToShow.length===1
                : countriesToShow.length<=10
                ? countriesToShow.map((countries)=><div key={countries.numericCode}>{countries.name}<button onClick={()=>setCountry(countries.name)}>show</button></div>)  // This will be display if there are less or 10 results
                : country===""
                ? <p>Type to find countries!</p>   // This will be display if the props.country is empty(The user hasn't search yet)
                : <p>To many matches to display!</p> // This will be display if there are to many results (more than 10)
            }
        </div>
    )
}

export default Countries
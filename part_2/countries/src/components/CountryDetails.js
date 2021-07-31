import { React ,useEffect,useState} from "react";
import axios from "axios";

const CountryDetails=({country})=>{
    const api_key = process.env.REACT_APP_API_KEY
    const [weather,setWeather]=useState()
    
    useEffect(()=>{
        axios
            .get("http://api.weatherstack.com/current?access_key="+api_key.trim()+"&query="+country.capital)
            .then((response=>setWeather(response.data)))
    },[country.name,api_key])
    
    
    return(
        <div>
            <h1>{country.name}</h1>
            capital: {country.capital}
            <br/>
            population: {country.population}
            <h2>Languages:</h2>
            <ul>
                {country.languages.map((lang)=><li key={lang.iso639_1}>{lang.name}</li>)}
            </ul>
            <img alt="" src={country.flag} width="100"/>
            <h2>Weather in {country.capital}</h2>
            { weather &&
                <div>
                    <h4>Temperature: {weather.current.temperature}</h4> 
                    <img alt="" src={weather.current.weather_icons[0]} width="80"/>
                    <h4>{weather.current.weather_descriptions}</h4>
                </div>
            }
        </div>
    )
}

export default CountryDetails
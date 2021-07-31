import {React,useState,useEffect} from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";
const App = () =>{
  const [country,setCountry]=useState("")
  const [countries,setCountries]=useState([])
  //Getting list of all countries
  useEffect(()=>{
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response)=>setCountries(response.data))
  },[])
  return (
    <div >
      <Filter country={country} setCountry={setCountry}/>
      <Countries setCountry={setCountry} country={country} listCountries={countries}/>
    </div>
  );
}

export default App;

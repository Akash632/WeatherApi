import React, { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Search from "./components/search/Search";
import Weather from "./components/Weather/Weather";
import cloudy from "./components/pictures/cloudy.jpg";
import rainy from "./components/pictures/rainy.jpg";
import snow from "./components/pictures/snow.jpg";
import Sunny from "./components/pictures/Sunny.jpg";
import ApiCalling from "./components/ApiCalling";

function App() {
  const[search,setSearch]=useState("delhi");
  const [value, setValue] = useState({});
  const [name, setName] = useState("");
  const [weather, setWeather] = useState({});
  const[bg,setBg]=useState(cloudy);
  const[message,setMessage]=useState("");
  const[updated,setUpdated]=useState("delhi");


  function handleChange(event){
    setMessage(event.target.value);
    // console.log(message);
  }
  function handleKeyDown(event){
    if(event.key==="Enter"){
      setUpdated(message);
      console.log(event.key);
      // console.log(updated);
    }
  }
  async function apiCall() {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${updated}&appid=600bb031befd49676b035d8b10f716a6`
    );
    let data = await response.json();
    setName(data.name);
    setValue(data.main);
    setWeather(data.weather[0]);
  }
useEffect(()=>{
  apiCall();
},[updated]);
  let { temp, feels_like, temp_min, temp_max, pressure, humidity } = value;
  let { id, main, description, icon } = weather;
  
  // function bgImage(){
  //   if(temp<273){
  //     setBg(snow);
  //     console.log("low temp");
  //   }
  // } 
  // bgImage();
  return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
      <div className="background_overlay">
        <div className="container">
          <div className="search">
            <input type="text" placeholder="Search" value={message} onChange={handleChange} onKeyDown={handleKeyDown}/>
            <button className="search_button">0F</button>
          </div>
          <Weather
            name={name}
            description={description}
            url={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            temp={temp}
          />
          <Description
            feels_like={feels_like}
            temp_max={temp_max}
            temp_min={temp_min}
            humidity={humidity}
            pressure={pressure}
          />
          {/* <ApiCalling city="Vijayawada"/> */}
        </div>
      </div>
    </div>
  );
}
//https://api.openweathermap.org/img/wn/02d@2x.png
export default App;

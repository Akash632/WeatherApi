import React from 'react';
import './App.css';
import Description from './components/Description/Description';
import Search from './components/search/Search';
import Weather from './components/Weather/Weather';
import cloudy from './components/pictures/cloudy.jpg'
import rainy from './components/pictures/rainy.jpg';
import snow from './components/pictures/snow.jpg';
import Sunny from './components/pictures/Sunny.jpg';
import ApiCalling from './components/ApiCalling';


function App() {
  let a=10;
  return (
    <div className="App" style={{backgroundImage:`url(${cloudy})`}}>
      {/* <div>
        <div>
          <div>
            <input type="text" placeholder="seacrh"/>
            <button>0F</button>
          </div>
          <div className="temp_section">
            <div className="icon">
              <p>Vijayawada</p>
              <img src="#" alt="weather_image"/>
              <p>cloudy</p>
            </div>
            <div className="temp">
              <h1>30C</h1>
            </div>
          </div>
        </div>
      </div> */}
      <div className="background_overlay">
        <div className="container">
        <Search/>
      <Weather/>
      <Description/>
      <ApiCalling city="Vijayawada"/>
        </div>
      </div>
    </div>
  );
}

export default App;

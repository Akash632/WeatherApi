import React ,{useState,useEffect}from 'react';
import './Description.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoodIcon from '@mui/icons-material/Mood';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CompressIcon from '@mui/icons-material/Compress';

function Description(props) {
  return (
    <div className="card_main">
      <div className="card">
        <div className="icon">
            <ArrowDownwardIcon/>
            <p>min</p>
        </div>
        <h2>{(props.temp_min-273).toFixed()}&deg;C</h2>
      </div>
      <div className="card">
        <div className="icon">
        <ArrowUpwardIcon/>
            <p>max</p>
        </div>
        <h2>{(props.temp_max-273).toFixed()}&deg;C</h2>
      </div>
      <div className="card">
        <div className="icon">
            <MoodIcon/>
            <p>feels like</p>
        </div>
        <h2>{`${(props.feels_like-273).toFixed()} c`}</h2>
      </div>
      <div className="card">
        <div className="icon">
            <CompressIcon/>
            <p>Pressure</p>
        </div>
        <h2>{`${props.pressure} hPa`}</h2>
      </div>
      <div className="card">
        <div className="icon">
            <ThermostatIcon/>
            <p>Humidity</p>
        </div>
        <h2>{`${props.humidity} %`}</h2>
      </div>
    </div>
  );
}

export default Description;


import React from "react"
import './weather.css';

function Weather(props){
    //https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=600bb031befd49676b035d8b10f716a6

return(
        <div className="mid_section">
            <div className="temp_section">
                <p>{props.name}</p>
                <img src={props.url}/>
                <p>{props.description}</p>
            </div>
            <div className="temp">
                <h1>{(props.temp-273).toFixed()}&deg;C</h1>
            </div>
        </div>
)
}
export default Weather;
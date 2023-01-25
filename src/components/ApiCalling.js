import React,{useState,useEffect} from 'react';

function ApiCalling(props) {
    const[value,setValue] = useState([]);
    async function apiCall(){
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=600bb031befd49676b035d8b10f716a6`)
        let data = await response.json();
        // console.log(data.weather);
        setValue(data.weather);
        console.log(value);
    }
    useEffect(() => {
        apiCall();
    }, []);
  return (
    <div>
        {/* {console.log(value.coord)} */}
    </div>
  );
}

export default ApiCalling;

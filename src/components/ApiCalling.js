import React,{useState,useEffect} from 'react';
import Description from './Description/Description';

function ApiCalling(props) {
    const[value,setValue] = useState({});
    async function apiCall(){
        let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=600bb031befd49676b035d8b10f716a6`)
        let data = await response.json();
        // console.log(data.weather);
         setValue(data.main);
        // console.log(value);
    }
    useEffect(() => {
        apiCall();
    }, []);
    console.log(value);
  return (
    <div>
        {/* {console.log(value.coord)} */}
        {/* {(value).map((objdata)=>console.log(objdata))}; */}
    </div>
  );
}

export default ApiCalling;

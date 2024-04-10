import './App.css';
import {useState} from "react";
import axios from "axios";
 const Weather=()=>{

    const [query,setQuery]=useState("");
    const [weather,setWeather]=useState(null);

    // const fetchData = async (query) => {
    //     const  data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fa8abcde404c2ff095000a869650e12d`);
    //     console.log(data);
    // };

    const see=(event)=>{
            setQuery(event.target.value);
        };

    const search=async ()=>{
        try{
              const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=fa8abcde404c2ff095000a869650e12d`);
              setWeather(response.data);
              console.log(response.data);
              setQuery("");
    }
    catch(error){
console.log(error)
setWeather(null);
    }}
//     if (weather && weather.weather && weather.weather.length > 0) {
//     if(weather.weather[0].icon==="01d"||weather.weather[0].icon==="01n")
//     {
//         setWicon("../images/sunny.png");
//     }
//     else if(weather.weather[0].icon==="02d"||weather.weather[0].icon==="02n")
//     {
//         setWicon("../images/sunny.png");
//     }
//     else if(weather.weather[0].icon==="03d"||weather.weather[0].icon==="03n")
//     {
//         setWicon("../images/sunny.png");
//     }
//     else if(weather.weather[0].icon==="04d"||weather.weather[0].icon==="04n")
//     {
//         setWicon("../images/sunny.png");
//     }
//     else if(weather.weather[0].icon==="09d"||weather.weather[0].icon==="09n")
//     {
//         setWicon("../images/rainy.png");
//     }
//     else if(weather.weather[0].icon==="13d"||weather.weather[0].icon==="13n")
//     {
//         setWicon("../images/rainy.png");
//     }
//     else if(weather.weather[0].icon==="10d"||weather.weather[0].icon==="10n")
//     {
//         setWicon("../images/rainy.png");
//     }
// }
    return(
        <section className='outer'>
            <h1>WEATHER</h1>
    <div className='main'>
        <div className='top_bar'>
            <input type="text" className='inp' placeholder="search" onChange={see}  value={query}></input>
            <div className='search_icon' onClick={search}>
                 <img src={`../images/search.png`} alt="search icon"/>
                </div>  
        </div>
        {weather && (
        <><div className='data'>
                    <h1>{weather.name}</h1>
<marquee className='m'>{weather.weather[0].description}</marquee>
                    <div className='temp'>{weather.main.temp} deg
                    </div>
                    <div className='place'>
                    </div>
                </div><div className='element'>
                        <div className='ele1'>
                            <img src={`../images/humidity.png`} alt="humidity icon" />
                            <div>
                                <h4> humidity</h4>
                                <h4> {weather.main.humidity}%</h4>
                            </div>
                        </div>
                        <div className='ele2'>
                            <img src={`../images/wind.png`} alt="wind icon" />
                            <div>
                                <h4> speed</h4>
                                <h4> {weather.wind.speed}km/hr</h4>
                            </div>
                        </div>
                    </div></>
        )}
    </div>
        </section>
)
};
export default Weather;
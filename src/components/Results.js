import React from "react";
import "../styles/Result/Result.css";

function Results(props) {
  return (
    <div>
      {Object.keys(props.data).length > 0 ? (
        <>
          {props.data.cod !== "404" ? (
            <div className="card">
              <div className="content">
                <h1>
                  {props.data.name} ({props.data.sys.country})
                </h1>

                <span className="weather">
                  <h3>{props.data.weather[0].description} </h3>
                  <img
                    src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
                    alt={props.data.weather[0].icon}
                  />
                </span>
                <ul>
                  <li>
                    <span className="main"> Latitude :</span>{" "}
                    {props.data.coord.lat}
                    <span className="main"> | Longitude :</span>
                    {props.data.coord.lon}
                  </li>
                  <li>
                    <span className="main"> Temparature </span>
                    {Math.floor(props.data.main.temp - 273.15)}° celcius
                  </li>
                  <li>
                    <span className="main"> Feels like : </span>
                    {Math.floor(props.data.main.feels_like - 273.15)}° celcius
                  </li>
                  <li>
                    <span className="main"> Humidity :</span>{" "}
                    {props.data.main.humidity} %
                  </li>
                  <li>
                    <span className="main">Wind Speed :</span>{" "}
                    {props.data.wind.speed} m/s
                  </li>
                  <li>
                    <span className="main">Wind Degree :</span>{" "}
                    {props.data.wind.deg} deg
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <h1>City/Zip Code not found.Please try again</h1>
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Results;

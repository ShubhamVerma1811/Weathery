import React, { useEffect, useState } from "react";
import "../styles/Input/Input.css";
import Results from "./Results";

function Input() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [city, setCity] = useState("Hyderabad");
  const [receivedData, setReceivedData] = useState({});

  useEffect(() => {
    getData();
  }, [city]);

  async function getData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await res.json();
      setReceivedData(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    if (Object.keys(receivedData).length > 0) {
    }
  }, [receivedData]);

  function search(e) {
    const name = e.target.firstChild.value;
    if (name !== "") {
      setCity(name);
      e.preventDefault();
    }
  }

  return (
    <div className="form">
      <h1>Weathery</h1>
      <form onSubmit={search}>
        <input type="text" placeholder="Enter City Name or Zip Code" />
        <button type="submit">Submit</button>
      </form>
      <Results data={receivedData} />
    </div>
  );
}

export default Input;

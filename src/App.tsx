import React from 'react';
import './App.css';
import Search from "./components/Search/Search";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";

function App() {
      const handleOnSearchChange = (searchData) =>{
      console.log(searchData)
    }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather></CurrentWeather>
    </div>
  );
}

export default App;

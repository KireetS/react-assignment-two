import React, { useState } from "react";
import hotels from "../Hotels";
import HotelCard from "./HotelCard";
import { Link } from "react-router-dom";
const Hotelslist = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [results, setResults] = useState(6);
  const filteredHotels = hotels.filter((hotel) =>
    selectedCity ? hotel.city === selectedCity : true
  );

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };
  const newhotels = filteredHotels.slice(0, results);

  return (
    <>
      <div className="min-h-screen w-full bg-slate-200 flex flex-col items-center justify-center flex-grow">
        <div className="flex items-center justify-start">
          <div className="my-4 py-5">
            <button
              onClick={() => handleCityClick("")}
              className={`rounded-lg p-2 ${
                selectedCity === "" ? "bg-blue-500 text-white" : ""
              }`}
            >
              All Cities
            </button>
            <button
              onClick={() => handleCityClick("Delhi")}
              className={`rounded-lg p-2 ${
                selectedCity === "Delhi" ? "bg-blue-500  text-white" : ""
              }`}
            >
              Delhi
            </button>
            <button
              onClick={() => handleCityClick("Mumbai")}
              className={`rounded-lg p-2 ${
                selectedCity === "Mumbai" ? "bg-blue-500  text-white" : ""
              }`}
            >
              Mumbai
            </button>
            <button
              onClick={() => handleCityClick("London")}
              className={`rounded-lg p-2 ${
                selectedCity === "London" ? "bg-blue-500  text-white" : ""
              }`}
            >
              London
            </button>
            <button
              onClick={() => handleCityClick("New York")}
              className={`rounded-lg p-2 ${
                selectedCity === "New York" ? "bg-blue-500  text-white" : ""
              }`}
            >
              New York
            </button>
          </div>
        </div>
        <div className="flex flex-wrap bg-slate-200 items-center p-20">
          {newhotels.map((hotel) => (
            <div key={hotel.hotel_id}>
              <Link to={`propery/${hotel.hotel_id}`}>
                <HotelCard name={hotel.name} city={hotel.city} />
              </Link>
            </div>
          ))}
        </div>
        <div>
          <button
            className="p-3 mb-10 disabled:bg-blue-300 bg-blue-500 rounded-lg font-semibold text-gray-200"
            onClick={() => {
              setResults(Math.min(filteredHotels.length, results + 3));
            }}
            disabled={results === filteredHotels.length ? true : false}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default Hotelslist;

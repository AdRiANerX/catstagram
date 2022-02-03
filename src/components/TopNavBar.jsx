import { useEffect, useState } from "react";
import { getBreeds } from "../services/thecatapi";

function TopNavBar({ breedSelected, breeds = [], breedStr = "" }) {
  const handleInputChange = (event) => {
    breedSelected(event.target.value);
  };

  return (
    <nav className="bg-white sticky top-0 z-30 px-5 shadow-lg shadow-gray-500/50">
      <div className="flex flex-col text-center md:flex-row md:justify-between md:py-3 mb-5">
        <div className="flex flex-row justify-center items-center pt-3">
          <img
            src="https://api.thecatapi.com/favicon.ico"
            alt="thecatapi-Ico"
            className="w-5 h-5 md:w-10 md:h-10 object-cover "
          />
          <h1 className="text-xl leading-8 font-bold tracking-tight text-pink-600 sm:text-4xl mx-3">
            Catstagram
          </h1>
        </div>

        <div className="py-4">
          <select
            onChange={(e) => handleInputChange(e)}
            value={breedStr}
            className="w-full text-gray-900 text-bold text-base border-b-2 focus:outline-none"
          >
            <option className=" text-gray-400 " value="">
              Select breed...
            </option>
            <option className="" value="">
              Random
            </option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;

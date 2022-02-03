/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";

function RandomBreeds({ breeds = [], breedSelected }) {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    const numbers = [];
    for (let index = 0; index < 4; index++) {
      numbers.push(Math.floor(Math.random() * (50 - 0)) + 0);
    }
    setRandom(numbers);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 grid-flow-row-dense">
      {breeds.map(
        (breed, idx) =>
          random.includes(idx) && (
            <div
              key={breed.id}
              onClick={() => breedSelected(breed.id)}
              className="flex flex-col justify-center items-center text-center p-2 bg-white cursor-pointer"
            >
              <img
                src={breed.image.url}
                alt=""
                className="rounded-lg border w-14 h-14 object-cover "
              />
              <span>{breed.name}</span>
            </div>
          )
      )}
    </div>
  );
}

export default RandomBreeds;

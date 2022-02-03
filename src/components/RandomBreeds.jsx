/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";

function RandomBreeds({ breeds = [] }) {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    for (let index = 0; index <= 4; index++) {
      setRandom([
        ...random,
        Math.floor(Math.random() * (breeds.length - 0)) + 0,
      ]);
    }
    // LOG:
    console.log(random);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 grid-flow-row-dense">
      {/* {breeds.map((breed, idx) => {
        if (random.includes(idx)) {
          return (
            <div
              key={breed.id}
              className="flex flex-col justify-center items-center text-center p-2 bg-white "
            >
              <img
                src="breed.image.url"
                alt=""
                className="rounded-lg border w-14 h-14 object-cover "
              />
              <span>{breed.name}</span>
            </div>
          );
        }
        <div>hola</div>;
      })} */}
    </div>
  );
}

export default RandomBreeds;

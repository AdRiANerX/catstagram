/* eslint-disable prettier/prettier */
import { useCallback, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import DetailsModal from "../components/DetailsModal";
import ImageCard from "../components/ImageCard";
import RandomBreeds from "../components/RandomBreeds";
import TopNavBar from "../components/TopNavBar";
import {
  getBreeds,
  getImagesByBreed,
  getRandomImages,
} from "../services/thecatapi";

function MainScreen() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  const [arrayImages, setArrayImages] = useState([]);
  const [breedStr, setBreedStr] = useState("");
  const [catSelected, setCatSelected] = useState({});
  const [breeds, setBreeds] = useState([]);

  const breedSelected = useCallback((breedToSearch) => {
    setBreedStr(breedToSearch);
    getImagesByBreed(breedToSearch).then((resp) => {
      setArrayImages(resp);
    });
  }, []);

  const selectCat = useCallback((cat) => {
    setCatSelected(cat);
  }, []);

  useEffect(() => {
    getBreeds().then((resp) => {
      setBreeds(resp);
    });
  }, []);

  useEffect(() => {
    if (arrayImages.length === 0) {
      getRandomImages().then((resp) => {
        setArrayImages(resp);
      });
    }
  }, [arrayImages]);

  useEffect(() => {
    getRandomImages().then((resp) => {
      setArrayImages([...arrayImages, ...resp]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry, inView]);

  return (
    <div className="relative bg-white">
      <TopNavBar
        breedSelected={breedSelected}
        breeds={breeds}
        breedStr={breedStr}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky mt-3 mb-5">
        <RandomBreeds breeds={breeds} breedSelected={breedSelected} />

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 grid-flow-row-dense">
          {arrayImages.map((img) => (
            <ImageCard key={img.id} data={img} selectCat={selectCat} />
          ))}
        </div>

        {breedStr === "" && (
          <div
            ref={ref}
            className="flex flex-row justify-center items-center text-center p-5 mt-5 bg-white rounded-lg border border-pink-400 shadow-md "
          >
            <h1>Cargando...</h1>
          </div>
        )}
      </div>

      <DetailsModal selectCat={selectCat} catSelected={catSelected} />
    </div>
  );
}

export default MainScreen;

import axios from "axios";

const API = "https://api.thecatapi.com/v1";

export const getBreeds = async () => {
  const arrayBreeds = [];
  await axios({
    method: "get",
    url: `${API}/breeds`,
    data: {},
  }).then((resp) => {
    resp.data.forEach((element) => {
      arrayBreeds.push({
        id: element.id,
        name: element.name,
        image: element.image,
      });
    });
  });

  return arrayBreeds;
};

export const getImagesByBreed = async (breed) => {
  if (breed === "") {
    return [];
  }
  const arrayImagesOfBreed = [];
  await axios({
    method: "get",
    url: `${API}/images/search?breed_id=${breed}&limit=20`,
    data: {},
  }).then((resp) => {
    resp.data.forEach((element) => {
      arrayImagesOfBreed.push({
        id: element.id,
        url: element.url,
        name: element.breeds[0].name,
        temperament: element.breeds[0].temperament,
        origin: element.breeds[0].origin,
        description: element.breeds[0].description,
      });
    });
  });

  return arrayImagesOfBreed;
};

export const getRandomImages = async () => {
  const arrayRandomImages = [];
  await axios({
    method: "get",
    url: `${API}/images/search?limit=20&page=0`,
    data: {},
  }).then((resp) => {
    resp.data.forEach((element) => {
      arrayRandomImages.push({
        id: element.id,
        url: element.url,
        name: element.breeds.length !== 0 ? element.breeds[0].name : "",
        temperament:
          element.breeds.length !== 0 ? element.breeds[0].temperament : "",
        origin: element.breeds.length !== 0 ? element.breeds[0].origin : "",
        description:
          element.breeds.length !== 0 ? element.breeds[0].description : "",
      });
    });
  });

  return arrayRandomImages;
};

export default {
  getBreeds,
  getImagesByBreed,
};

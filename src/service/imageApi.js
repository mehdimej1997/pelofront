import axios from "axios";
const URL_API = "https://peloportfolio.herokuapp.com/api/";

const getSomeImages = () => {
  return axios
    .get(`${URL_API}images?populate=*`)
    .then((res) => res)
    .then((data) => data.data.data);
};

const getImageByID = (imageId) => {
  return axios
    .get(`${URL_API}images/${imageId}?populate=*`)
    .then((res) => res)
    .then((data) => data.data);
};

const getSlideImgs = () => {
  return axios
    .get(`${URL_API}slider?populate=*`)
    .then((res) => res)
    .then((data) => data.data);
};

export default {
  getSomeImages,
  getImageByID,
  getSlideImgs,
};

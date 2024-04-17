import axios from "axios";

export const getExtractionMaps = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
};

export const createExtractionMap = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
      console.log(data, "data");
    }, 2000);
  });
};

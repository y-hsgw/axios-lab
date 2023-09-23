import Axios from "axios";
import qs from "qs";

export const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  paramsSerializer: (params) => qs.stringify(params),
});

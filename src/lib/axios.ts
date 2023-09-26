import Axios from "axios";
import { stringify } from "qs";

export const axios = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  paramsSerializer: (params) => stringify(params),
});

import axios from "axios";

const instance = axios.create({
  baseURL: "https://admin.ubtimes.mn/api/",
});

instance.defaults.withCredentials = true;

export default instance;

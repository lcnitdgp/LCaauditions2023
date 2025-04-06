import axios from "axios";
import { baseURLlink } from "../config/configurl.js";

// Set config defaults when creating the instance
const instance = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_URL,
  baseURL: baseURLlink,
  withCredentials: true,
});

export default instance;

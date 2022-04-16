import axios from "axios";
// glitch url: https://seemly-truthful-scribe.glitch.me/
const API_URL = "http://localhost:3500/" || process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: API_URL,
});

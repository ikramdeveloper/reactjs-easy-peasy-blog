import axios from "axios";
const API_URL = "https://seemly-truthful-scribe.glitch.me/";

export default axios.create({
  baseURL: API_URL,
});

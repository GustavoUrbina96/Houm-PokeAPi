import axios from "axios";

axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

const get = axios.get;

// eslint-disable-next-line import/no-anonymous-default-export
export default { get };

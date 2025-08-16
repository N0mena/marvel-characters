import axios from "axios";

const API = "http://localhost:5000/characters";

export const getCharacters = () => axios.get(API);
export const getCharacter = (id) => axios.get(`${API}/${id}`);
export const addCharacter = (character) => axios.post(API, character);
export const updateCharacter = (id, character) => axios.put(`${API}/${id}`, character);
export const deleteCharacter = (id) => axios.delete(`${API}/${id}`);

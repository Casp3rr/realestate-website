import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '63ec27b8a4msh0b5e373f90df29fp191516jsn337dd63ed11e',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });

  return data;
}
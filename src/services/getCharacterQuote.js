import axiosInstance from 'axiosInstance';

export const getCharacterQuote = async (character) =>
  await axiosInstance.get(`/quote/random?author=${character}`).then((response) => response.data);

import axiosInstance from 'axiosInstance';

export const getCharacters = async ({ offset = 0 } = {}) => {
  console.log({ offset });
  return await axiosInstance.get(`/characters?limit=10&offset=${offset}`).then((response) => response.data);
};

import axiosInstance from 'axiosInstance';

export const getPaginatedCharacters = async ({ offset = 0 } = {}) =>
  await axiosInstance.get(`/characters?limit=10&offset=${offset}`).then((response) => response.data);

import axiosInstance from 'axiosInstance';

export const getCharacter = async ({ id }) =>
  await axiosInstance.get(`/characters/${id}`).then((response) => response.data);

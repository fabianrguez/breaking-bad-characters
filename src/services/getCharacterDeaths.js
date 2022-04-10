import axiosInstance from 'axiosInstance';

export const getCharacterDeaths = async (name) =>
  await axiosInstance.get(`/death?name=${name}`).then((response) => response.data);

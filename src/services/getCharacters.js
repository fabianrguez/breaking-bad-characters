import axiosInstance from 'axiosInstance';

export const getCharacters = async () => await axiosInstance.get('/characters').then(response => response.data);

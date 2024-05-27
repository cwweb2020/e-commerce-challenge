/* eslint-disable prettier/prettier */
import {routes} from './config';
import API from './instance';

export const addProductToFavorite = async (param) => {
  return await API.post(`${routes.favorite}`, param);
};

export const removeProductToFavorite = async (param) => {
  return await API.delete(
    `${routes.favorite}?userId=${param.userId}&productId=${param.productId}`,
  );
};

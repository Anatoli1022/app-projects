import * as a from './actionTypes';

export const addProduct = (newProduct) => {
  return {
    type: a.ADD_PRODUCT,
    payload: newProduct,
  };
};

export const deleteProduct = (id) => {
  return {
    type: a.DELETE_PRODUCT,
    payload: id,
  };
};

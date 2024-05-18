import * as a from './actionTypes';

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_PRODUCT:
      return [...state, action.payload];

    case a.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);

    default:
      return state;
  }
};

export default productReducer;

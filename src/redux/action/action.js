// for add item
export const addCart = (product) => {
  return {
    type: "ADDCART",
    payload: product,
  };
};

//delete item
export const delCart = (product) => {
  return {
    type: "DELCART",
    payload: product,
  };
};

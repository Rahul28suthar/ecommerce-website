const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDCART":
      if (!product) return state; // <-- Prevent crashing if payload is undefined
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...product, qty: 1 }];
      }

    case "DELCART":
      if (!product) return state; // <-- Prevent crashing if payload is undefined
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        return state.filter((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;

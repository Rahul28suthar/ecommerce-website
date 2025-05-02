import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch({ type: "DELCART", payload: product });
  };

  const totalPrice = cartItems
    .reduce((total, product) => total + product.price * product.qty, 0)
    .toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/products" className="btn btn-shop">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.title} className="cart-img" />
            <div className="item-details">
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
              <p>Qty: {product.qty}</p>
              <p>Total: ${(product.price * product.qty).toFixed(2)}</p>
              <div className="qty-controls">
                <button
                  onClick={() =>
                    dispatch({ type: "DELCART", payload: product })
                  }
                >
                  −
                </button>
                <span>{product.qty}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "ADDCART", payload: product })
                  }
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-remove"
                onClick={() => handleRemove(product)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Amount: ${totalPrice}</h3>
        <button className="btn btn-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;

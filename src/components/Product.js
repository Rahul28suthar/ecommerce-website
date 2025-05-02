import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { addCart } from "../redux/action/action";
import Skeleton from "react-loading-skeleton";
import { pageTransition } from "../animation";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Skeleton height={400} />
        </motion.div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <motion.div
        className="product-detail"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="product-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={product.image} alt={product.title} />
        </motion.div>

        <motion.div
          className="product-description"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h4>{product.category}</h4>
          <h1>{product.title}</h1>
          <p className="rating">Rating: {product.rating?.rate}</p>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>

          <motion.button
            className="add-to-cart"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addProduct(product)}
          >
            <Link>Add to Cart</Link>
          </motion.button>

          <motion.button
            className="add-to-cart"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/cart">Go to Cart</Link>
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div
      className="product"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="product-container">
        <div className="product-show">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;

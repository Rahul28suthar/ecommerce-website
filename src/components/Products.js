import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { lineAnimation, pageTransition } from "../animation";

const Products = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const componentMounted = useRef(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted.current) {
        const json = await response.json();
        setData(json);
        setFilter(json);
        setLoading(false);
      }
    };

    getProducts();

    return () => {
      componentMounted.current = false;
    };
  }, []);

  const Loading = () => {
    return (
      <>
        <Skeleton height={350} count={4} />
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="filter-btn">
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>
        {filter.map((product, index) => (
          <motion.div
            key={product.id}
            className="product-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="card">
              <img
                className="product-img"
                src={product.image}
                alt={product.title}
              />
              <div className="card-detail">
                <h5 className="card-title">{product.title}</h5>
                <h5 className="card-text">$ {product.price}</h5>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </>
    );
  };
  return (
    <motion.div
      className="products-page"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="product-containe">
        <motion.div
          className="product-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4>Latest Products</h4>
        </motion.div>

        <motion.div
          variants={lineAnimation}
          initial="hidden"
          animate="show"
          className="title-line"
        ></motion.div>
      </div>
      <div className="loading">{loading ? <Loading /> : <ShowProducts />}</div>
    </motion.div>
  );
};
export default Products;

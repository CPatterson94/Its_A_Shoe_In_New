import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../redux/api/products";
import { addToCart } from "../redux/slices/dataSlice";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div className="products-container">
      <h1>Stock</h1>

      <ul className="products">
        {products &&
          products.map((product) => (
            <div className="single-product-container" key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>

              {product.img && (
                <img
                  className="product-imgs"
                  src={product.img}
                  alt={product.name}
                />
              )}

              <div className="buttons-container">
                <Link to={`/product/${product.id}`}>
                  <button className="view-btn">View Shoe</button>
                </Link>
                <p>Price: ${product.price}</p>
                <button
                  className="add-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;

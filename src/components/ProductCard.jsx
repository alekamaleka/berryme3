import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useAuth();

  const handleAddToCart = () => {
    console.log('Adding to cart:', product.name);
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image || "/api/placeholder/300/300"} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price}</div>
        <button onClick={handleAddToCart} className="btn-primary">
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
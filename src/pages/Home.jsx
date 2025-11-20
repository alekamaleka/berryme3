import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Клубника в молочном шоколаде",
      description: "Свежая клубника в бельгийском молочном шоколаде",
      price: 25,
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Бенто торт 'Клубничный рай'",
      description: "Нежный бисквит с клубничным кремом и свежими ягодами",
      price: 45,
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Букет 'Ягодная фея'",
      description: "Роскошный букет из шоколадной клубники с цветами",
      price: 75,
      image: "/api/placeholder/300/300"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Анна",
      text: "Очень вкусная клубника! Заказывала несколько раз, всегда свежая и красивая.",
      rating: 5
    },
    {
      id: 2,
      name: "Мария",
      text: "Бенто торты просто восхитительны! Красиво и вкусно.",
      rating: 5
    },
    {
      id: 3,
      name: "Дмитрий",
      text: "Заказывал букет из клубники для жены на годовщину. Была в полном восторге!",
      rating: 5
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">BERRY - Сладости для души</h1>
            <p className="hero-subtitle">Клубника в шоколаде, изысканные торты и цветочные композиции</p>
            <Link to="/catalog" className="btn-primary">Смотреть каталог</Link>
          </div>
        </div>
      </section>

      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">Популярные товары</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <h2 className="section-title">Отзывы клиентов</h2>
          <div className="reviews-grid">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
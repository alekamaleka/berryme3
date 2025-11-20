
import React from 'react';
import ReviewCard from '../components/ReviewCard';

const Reviews = () => {
  const allReviews = [
 
  ];

  return (
    <div className="reviews-page">
      <div className="container">
        <h1 className="page-title">Отзывы наших клиентов</h1>
        <p className="page-subtitle">Более 5000 довольных клиентов доверяют нам</p>
        
        <div className="reviews-stats">
          <div className="stat">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Средняя оценка</div>
          </div>
          <div className="stat">
            <div className="stat-number">5000+</div>
            <div className="stat-label">Отзывов</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Рекомендуют</div>
          </div>
        </div>

        <div className="reviews-grid">
          {allReviews.map(review => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
import React from 'react';

const ReviewCard = ({ review }) => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return '#27ae60';
    if (rating >= 4) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-avatar">
          {review.name.charAt(0).toUpperCase()}
        </div>
        <div className="reviewer-info">
          <h4 className="reviewer-name">{review.name}</h4>
          {review.date && <span className="review-date">{review.date}</span>}
        </div>
      </div>
      
      <div className="review-rating">
        <span className="stars">{renderStars(review.rating)}</span>
        <span 
          className="rating-number"
          style={{ color: getRatingColor(review.rating) }}
        >
          {review.rating.toFixed(1)}
        </span>
      </div>
      
      <p className="review-text">"{review.text}"</p>
      
      {review.product && (
        <div className="review-product">
          Заказ: <strong>{review.product}</strong>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
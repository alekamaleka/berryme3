import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h3>Подпишитесь на рассылку</h3>
          <p>Получайте эксклюзивные предложения и новости о наших новинках</p>
          {isSubscribed ? (
            <div className="success-message">
              ✅ Спасибо за подписку! Проверьте вашу почту.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Подписаться
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
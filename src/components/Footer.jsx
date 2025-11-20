import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BERRY</h3>
            <p>Сладости для души. Клубника в шоколаде, изысканные торты и цветочные композиции.</p>
          </div>
          
          <div className="footer-section">
            <h3>Контакты</h3>
            <a href="tel:+996700556548">+996 700 556548</a>
            <a href="mailto:info@berry.com">info@berry.com</a>
            <span>г. Бишкек, ул. Примерная, 123</span>
          </div>
          
          <div className="footer-section">
            <h3>Социальные сети</h3>
            <div className="social-links">
              <a 
                href="https://www.instagram.com/berryme.bish?igsh=MWdpcWxrbzA5eHl3MQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                📷 Instagram
              </a>
              <a 
                href="https://t.me/berryMebish" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                ✈️ Telegram
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Часы работы</h3>
            <span>Пн-Вс: 9:00 - 21:00</span>
            <span>Доставка: 10:00 - 20:00</span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 BERRY. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
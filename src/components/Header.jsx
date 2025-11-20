import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';


const Header = () => {
  const { user, logout, cart } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">BERRY</span>
          </Link>

          <div className="search-container">
            <SearchBar onSearch={handleSearch} />
          </div>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/catalog" className="nav-link">Каталог</Link>
            <Link to="/about" className="nav-link">О нас</Link>
            <Link to="/contacts" className="nav-link">Контакты</Link>
          </nav>

          <div className="header-actions">
            {user ? (
              <div className="user-menu">
                <span className="user-name">Привет, {user.name}</span>
                <button onClick={handleLogout} className="btn-secondary">Выйти</button>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn-secondary">Войти</Link>
                <Link to="/register" className="btn-primary">Регистрация</Link>
              </div>
            )}

            <Link to="/checkout" className="cart-icon">
              🛒
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>

            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
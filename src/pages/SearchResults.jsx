import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 200]);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';


  const allProducts = [
   
    {
      id: 1,
      name: "Клубника в молочном шоколаде",
      description: "Свежая клубника в бельгийском молочном шоколаде",
      price: 25,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Клубника в темном шоколаде",
      description: "Клубника в горьком шоколаде с миндальными лепестками",
      price: 28,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Клубника в белом шоколаде",
      description: "Нежная клубника в белом шоколаде с кокосовой стружкой",
      price: 26,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    
    {
      id: 9,
      name: "Бенто торт 'Клубничный рай'",
      description: "Нежный бисквит с клубничным кремом и свежими ягодами",
      price: 45,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    {
      id: 10,
      name: "Бенто торт 'Шоколадная мечта'",
      description: "Шоколадный бисквит с крем-чиз и карамелью",
      price: 48,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    
    {
      id: 17,
      name: "Торт 'Клубничная фантазия'",
      description: "Трехъярусный торт со свежей клубникой",
      price: 85,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 18,
      name: "Торт 'Шоколадный гурман'",
      description: "Богатый шоколадный торт с трюфельной начинкой",
      price: 95,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 25,
      name: "Букет 'Ягодная фея'",
      description: "Роскошный букет из шоколадной клубники с цветами",
      price: 75,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 26,
      name: "Композиция 'Сладкие розы'",
      description: "Клубничные розы в шоколаде в корзине",
      price: 85,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    }
  ];

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'strawberry', name: 'Клубника в шоколаде' },
    { id: 'bento', name: 'Бенто торты' },
    { id: 'cakes', name: 'Торты' },
    { id: 'flowers', name: 'Цветы и композиции' }
  ];


  useEffect(() => {
    if (query) {
      setLoading(true);
      
     
      setTimeout(() => {
        const results = allProducts.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        setSearchResults(results);
        setFilteredResults(results);
        setLoading(false);
      }, 500);
    }
  }, [query]);

  useEffect(() => {
    let results = [...searchResults];


    if (activeCategory !== 'all') {
      results = results.filter(product => product.category === activeCategory);
    }

  
    results = results.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredResults(results);
  }, [activeCategory, priceRange, searchResults]);

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
  };

  if (loading) {
    return (
      <div className="search-results">
        <div className="container">
          <div className="loading-search">
            <div className="spinner"></div>
            <p>Ищем "{query}"...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="container">
        <div className="search-header">
          <h1 className="page-title">Результаты поиска</h1>
          <p className="search-query">По запросу: "<strong>{query}</strong>"</p>
          <p className="results-count">Найдено товаров: {filteredResults.length}</p>
        </div>

        {searchResults.length > 0 ? (
          <div className="search-content">
            <div className="search-filters">
              <div className="filter-section">
                <h3>Категории</h3>
                <div className="category-filters">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3>Цена</h3>
                <div className="price-filter">
                  <div className="price-inputs">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
                      min="0"
                      max="200"
                      className="price-input"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
                      min="0"
                      max="200"
                      className="price-input"
                    />
                  </div>
                  <div className="price-range">
                    <span>0$</span>
                    <span>200$</span>
                  </div>
                </div>
              </div>

              <button 
                className="btn-secondary reset-filters"
                onClick={() => {
                  setActiveCategory('all');
                  setPriceRange([0, 200]);
                }}
              >
                Сбросить фильтры
              </button>
            </div>

            <div className="search-results-grid">
              {filteredResults.length > 0 ? (
                <div className="products-grid">
                  {filteredResults.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <h3>Ничего не найдено</h3>
                  <p>Попробуйте изменить параметры фильтров</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="no-search-results">
            <div className="no-results-content">
              <h2>По запросу "{query}" ничего не найдено</h2>
              <p>Попробуйте изменить поисковый запрос или посмотрите наши популярные категории:</p>
              <div className="suggested-categories">
                <Link to="/catalog?category=strawberry" className="category-suggestion">
                  🍓 Клубника в шоколаде
                </Link>
                <Link to="/catalog?category=bento" className="category-suggestion">
                  🎂 Бенто торты
                </Link>
                <Link to="/catalog?category=flowers" className="category-suggestion">
                  💐 Цветочные композиции
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
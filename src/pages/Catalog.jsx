import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'strawberry', name: 'Клубника в шоколаде' },
    { id: 'bento', name: 'Бенто торты' },
    { id: 'cakes', name: 'Торты' },
    { id: 'flowers', name: 'Цветы и композиции' }
  ];

  const products = [
  
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
      id: 4,
      name: "Клубника в шоколаде с орехами",
      description: "Шоколадная клубника с дробленым фундуком и грецким орехом",
      price: 30,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    {
      id: 5,
      name: "Клубника в шоколаде с посыпкой",
      description: "Разноцветная кондитерская посыпка на молочном шоколаде",
      price: 27,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    {
      id: 6,
      name: "Клубника в двух шоколадах",
      description: "Сочетание молочного и белого шоколада",
      price: 32,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    {
      id: 7,
      name: "Клубника в шоколаде с кунжутом",
      description: "Питательный и хрустящий кунжут на темном шоколаде",
      price: 29,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },
    {
      id: 8,
      name: "Клубника в шоколаде 'Премиум'",
      description: "Отборная клубника в шоколаде с золотой пылью",
      price: 45,
      category: 'strawberry',
      image: "/api/placeholder/300/300"
    },

    // Бенто торты
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
      id: 11,
      name: "Бенто торт 'Манго-маракуйя'",
      description: "Легкий бисквит с тропическими фруктами",
      price: 50,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    {
      id: 12,
      name: "Бенто торт 'Красный бархат'",
      description: "Классический красный бархат с сырным кремом",
      price: 52,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    {
      id: 13,
      name: "Бенто торт 'Медовик'",
      description: "Нежные медовые коржи со сметанным кремом",
      price: 47,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    {
      id: 14,
      name: "Бенто торт 'Фисташковый'",
      description: "Фисташковый бисквит с малиновой прослойкой",
      price: 55,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    {
      id: 15,
      name: "Бенто торт 'Лимонный'",
      description: "Освежающий лимонный торт с безе",
      price: 46,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },
    {
      id: 16,
      name: "Бенто торт 'Карамельное яблоко'",
      description: "Яблочный бисквит с карамельным кремом",
      price: 49,
      category: 'bento',
      image: "/api/placeholder/300/300"
    },

    // Торты
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
      id: 19,
      name: "Торт 'Птичье молоко'",
      description: "Классический торт на суфле с шоколадной глазурью",
      price: 75,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 20,
      name: "Торт 'Наполеон'",
      description: "Слоеный торт с заварным кремом",
      price: 70,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 21,
      name: "Торт 'Морковный'",
      description: "Пряный морковный торт с крем-чиз",
      price: 80,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 22,
      name: "Торт 'Фруктовый сад'",
      description: "Легкий бисквит с сезонными фруктами",
      price: 90,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 23,
      name: "Торт 'Чизкейк Нью-Йорк'",
      description: "Классический чизкейк с ягодным соусом",
      price: 88,
      category: 'cakes',
      image: "/api/placeholder/300/300"
    },
    {
      id: 24,
      name: "Торт 'Сметанник'",
      description: "Нежный сметанный торт с ванильным кремом",
      price: 65,
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
    },
    {
      id: 27,
      name: "Букет 'Шоколадный водопад'",
      description: "Каскад из клубники в разных видах шоколада",
      price: 95,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 28,
      name: "Композиция 'Небесная сладость'",
      description: "Воздушная композиция с клубникой и конфетами",
      price: 70,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 29,
      name: "Букет 'Романтический'",
      description: "Красная клубника в шоколаде с розами",
      price: 88,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 30,
      name: "Композиция 'Королевская'",
      description: "Премиум клубника с золотым декором",
      price: 120,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 31,
      name: "Букет 'Минимализм'",
      description: "Элегантная композиция в бело-бордовых тонах",
      price: 65,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 32,
      name: "Композиция 'Сердечко'",
      description: "Клубника в форме сердца для любимых",
      price: 78,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 33,
      name: "Букет 'Детский'",
      description: "Яркая композиция с разноцветной посыпкой",
      price: 55,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    },
    {
      id: 34,
      name: "Композиция 'Бизнес-класс'",
      description: "Строгая элегантная композиция для деловых людей",
      price: 110,
      category: 'flowers',
      image: "/api/placeholder/300/300"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const getProductCountByCategory = (categoryId) => {
    if (categoryId === 'all') return products.length;
    return products.filter(product => product.category === categoryId).length;
  };

  console.log('Active category:', activeCategory);
  console.log('Filtered products:', filteredProducts.length);

  return (
    <div className="catalog">
      <div className="container">
        <h1 className="page-title">Каталог</h1>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name} ({getProductCountByCategory(category.id)})
            </button>
          ))}
        </div>

        <div className="products-count">
          Найдено товаров: {filteredProducts.length}
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <h3>Товары не найдены</h3>
            <p>Попробуйте выбрать другую категорию</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
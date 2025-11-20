import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Анна Петрова",
      position: "Основатель & Шеф-кондитер",
      description: "Создает уникальные рецепты и следит за качеством продукции",
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Мария Иванова",
      position: "Дизайнер композиций",
      description: "Превращает сладости в произведения искусства",
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Елена Сидорова",
      position: "Менеджер по работе с клиентами",
      description: "Помогает создать идеальный подарок для каждого случая",
      image: "/api/placeholder/200/200"
    }
  ];

  const values = [
    {
      icon: "❤️",
      title: "Любовь к делу",
      description: "Каждый наш продукт создается с любовью и вниманием к деталям"
    },
    {
      icon: "⭐",
      title: "Высшее качество",
      description: "Используем только свежие и натуральные ингредиенты"
    },
    {
      icon: "🎨",
      title: "Креативность",
      description: "Создаем уникальные дизайны для особенных моментов"
    },
    {
      icon: "🚀",
      title: "Инновации",
      description: "Постоянно развиваемся и внедряем новые технологии"
    }
  ];

  const milestones = [
    { year: "2022", event: "Открытие первой кондитерской" },
    { year: "2023", event: "Запуск онлайн-магазина" },
    { year: "2024", event: "5000+ довольных клиентов" },
    { year: "2024", event: "Расширение ассортимента до 50+ позиций" }
  ];

  return (
    <div className="about">
      <div className="container">
        <h1 className="page-title">О нас</h1>
        
        
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-hero-text">
              <h2>BERRY - Создаем сладкие воспоминания</h2>
              <p>
                Мы - команда passionate кондитеров и дизайнеров, которая превращает 
                обычные сладости в незабываемые впечатления. С 2022 года мы дарим 
                радость нашим клиентам через изысканные десерты и уникальные композиции.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">5000+</span>
                  <span className="stat-label">Счастливых клиентов</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">10000+</span>
                  <span className="stat-label">Выполненных заказов</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Видов продукции</span>
                </div>
              </div>
            </div>
            <div className="about-hero-image">
              <img src="https://idei.club/uploads/posts/2022-10/1667029920_6-idei-club-p-interer-kafe-konditerskoi-krasivo-6.jpg" alt="Наша кондитерская" />
            </div>
          </div>
        </section>

        
        <section className="mission-section">
          <div className="mission-content">
            <h2>Наша миссия</h2>
            <p className="mission-text">
              Мы верим, что каждый заслуживает немного сладости в жизни. 
              Наша миссия - создавать не просто десерты, а настоящие эмоции, 
              которые остаются в памяти надолго. От первой клубнички в шоколаде 
              до сложных многоярусных тортов - каждая наша работа это произведение искусства.
            </p>
          </div>
        </section>

        
        <section className="values-section">
          <h2 className="section-title">Наши ценности</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        
        <section className="history-section">
          <h2 className="section-title">Наша история</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.event}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="team-section">
          <h2 className="section-title">Наша команда</h2>
          <p className="section-subtitle">Талантливые люди, которые делают ваши сладкие мечты реальностью</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="advantages-section">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="advantages-grid">
            <div className="advantage">
              <div className="advantage-icon">🍓</div>
              <h3>Свежие ингредиенты</h3>
              <p>Ежедневно получаем свежую клубнику и используем только натуральные продукты</p>
            </div>
            <div className="advantage">
              <div className="advantage-icon">⚡</div>
              <h3>Быстрая доставка</h3>
              <p>Доставляем заказы в течение 2 часов по Бишкеку в удобное для вас время</p>
            </div>
            <div className="advantage">
              <div className="advantage-icon">🎁</div>
              <h3>Подарочная упаковка</h3>
              <p>Бесплатная праздничная упаковка для всех заказов</p>
            </div>
            <div className="advantage">
              <div className="advantage-icon">💝</div>
              <h3>Индивидуальный подход</h3>
              <p>Создаем уникальные композиции по вашим пожеланиям и фотографиям</p>
            </div>
          </div>
        </section>

      
        <section className="about-cta">
          <div className="cta-content">
            <h2>Готовы попробовать?</h2>
            <p>Создадим для вас идеальный сладкий сюрприз!</p>
            <div className="cta-buttons">
              <Link to="/catalog" className="btn-primary">Смотреть каталог</Link>
              <Link to="/contacts" className="btn-secondary">Связаться с нами</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
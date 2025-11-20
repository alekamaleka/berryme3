// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            id: 1,
            title: "Свежая клубника в шоколаде",
            subtitle: "Бельгийский шоколад премиум класса",
            image: "/images/slide1.jpg",
            buttonText: "Заказать сейчас",
            color: "#e91e63"
        },
        {
            id: 2,
            title: "Новинка сезона",
            subtitle: "Торты ручной работы",
            image: "/images/slide2.jpg",
            buttonText: "Смотреть новинки",
            color: "#9c27b0"
        },
        {
            id: 3,
            title: "Скидка 15% на первый заказ",
            subtitle: "Только для новых клиентов",
            image: "/images/slide3.jpg",
            buttonText: "Получить скидку",
            color: "#2196f3"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-slider">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ 
                        backgroundImage: `url(${slide.image})`,
                        '--accent-color': slide.color
                    }}
                >
                    <div className="slide-content">
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <button className="slide-btn">{slide.buttonText}</button>
                    </div>
                </div>
            ))}
            
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
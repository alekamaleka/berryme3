import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import telegramService from '../services/telegramService';

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderData, setOrderData] = useState({
    name: user?.name || '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = {};
    
    if (!orderData.name.trim()) errors.name = 'Имя обязательно';
    if (!orderData.phone.trim()) errors.phone = 'Телефон обязателен';
    if (!orderData.address.trim()) errors.address = 'Адрес обязателен';
    
    const cleanPhone = orderData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 9) {
      errors.phone = 'Номер должен содержать минимум 9 цифр';
    }

    return errors;
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('Пожалуйста, войдите в аккаунт для оформления заказа');
      navigate('/login');
      return;
    }
    
    if (cart.length === 0) {
      alert('Корзина пуста');
      return;
    }

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      alert('Пожалуйста, заполните все обязательные поля правильно:\n' + 
            Object.values(errors).join('\n'));
      return;
    }

    setIsSubmitting(true);

    try {
     
      const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        status: 'new',
        items: [...cart], 
        total: getCartTotal(),
        customer: {
          name: orderData.name.trim(),
          phone: orderData.phone.trim(),
          address: orderData.address.trim(),
          notes: orderData.notes.trim(),
          email: user.email || 'Не указан'
        }
      };

      console.log('Создан заказ:', order);

   
      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      existingOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));

  
      try {
        await telegramService.sendOrderNotification({
          order: {
            id: order.id,
            date: order.date
          },
          customer: order.customer,
          items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
          })),
          total: getCartTotal()
        });
        console.log('Уведомление отправлено');
      } catch (telegramError) {
        console.log('Telegram уведомление не отправлено, но заказ сохранен');
 
      }


      alert(`✅ Заказ #${order.id} успешно оформлен!\n\n` +
            `Имя: ${order.customer.name}\n` +
            `Телефон: ${order.customer.phone}\n` +
            `Адрес: ${order.customer.address}\n` +
            `Сумма: $${order.total}\n\n` +
            `Мы скоро свяжемся с вами для подтверждения заказа!`);

  
      cart.forEach(item => removeFromCart(item.id));
      
    
      navigate('/');
      
    } catch (error) {
      console.error('Критическая ошибка оформления заказа:', error);
      alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону +996 700 556548');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Корзина пуста</h1>
          <p className="text-center">Добавьте товары в корзину чтобы оформить заказ</p>
          <div className="text-center">
            <button onClick={() => navigate('/catalog')} className="btn-primary">
              Перейти в каталог
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Оформление заказа</h1>
        
        <div className="checkout-content">
          <div className="cart-items">
            <h2>Товары в корзине</h2>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} width="60" height="60" />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price} × {item.quantity} = ${item.price * item.quantity}</div>
                </div>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    type="button"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    type="button"
                  >
                    +
                  </button>
                </div>
                <button 
                  className="btn-secondary"
                  onClick={() => removeFromCart(item.id)}
                  type="button"
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <form onSubmit={handleSubmitOrder}>
              <h3>Данные для заказа</h3>
              
              <div className="form-group">
                <label htmlFor="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Введите ваше имя"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={orderData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+996507884339"
                  disabled={isSubmitting}
                />
                <small>Формат: +996507884339</small>
              </div>

              <div className="form-group">
                <label htmlFor="address">Адрес доставки *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={orderData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Улица, дом, квартира"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes">Примечания к заказу</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={orderData.notes}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Особые пожелания, время доставки и т.д."
                  disabled={isSubmitting}
                />
              </div>

              <div className="order-total">
                <div className="total-line">
                  <span>Сумма заказа:</span>
                  <span>${getCartTotal()}</span>
                </div>
                <div className="total-line">
                  <span>Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <div className="total-line final-total">
                  <span>Итого к оплате:</span>
                  <span>${getCartTotal()}</span>
                </div>
              </div>

              <button 
                type="submit" 
                className={`btn-primary submit-order ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
                style={{width: '100%'}}
              >
                {isSubmitting ? 'Оформляем заказ...' : 'Оформить заказ'}
              </button>

              <p className="order-note">
                После нажатия кнопки "Оформить заказ" мы свяжемся с вами для подтверждения заказа в течение 15 минут.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
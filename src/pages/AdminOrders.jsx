import React, { useState, useEffect } from 'react';
import telegramService from '../services/telegramService';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () => {
    const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(savedOrders);
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    setLoading(true);
    
    try {
      
      const updatedOrders = orders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      );
      
      setOrders(updatedOrders);
      localStorage.setItem('orders', JSON.stringify(updatedOrders));

      const order = updatedOrders.find(o => o.id === orderId);
      await telegramService.sendStatusNotification(
        orderId, 
        newStatus, 
        order.customer.phone
      );

      alert(`Статус заказа #${orderId} изменен на "${getStatusText(newStatus)}"`);
    } catch (error) {
      console.error('Ошибка обновления статуса:', error);
      alert('Ошибка при обновлении статуса');
    } finally {
      setLoading(false);
    }
  };

  const getStatusText = (status) => {
    const statusMap = {
      'new': 'Новый',
      'confirmed': 'Подтвержден',
      'preparing': 'Готовится',
      'delivering': 'В пути',
      'completed': 'Выполнен',
      'cancelled': 'Отменен'
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status) => {
    const colorMap = {
      'new': '#3498db',
      'confirmed': '#f39c12',
      'preparing': '#9b59b6',
      'delivering': '#e67e22',
      'completed': '#27ae60',
      'cancelled': '#e74c3c'
    };
    return colorMap[status] || '#95a5a6';
  };

  return (
    <div className="admin-orders">
      <div className="container">
        <h1 className="page-title">Управление заказами</h1>
        <p className="page-subtitle">Все заказы и их статусы</p>

        {orders.length === 0 ? (
          <div className="no-orders">
            <h3>Заказов пока нет</h3>
            <p>Новые заказы будут появляться здесь</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-info">
                    <h3>Заказ #{order.id}</h3>
                    <span className="order-date">
                      {new Date(order.date).toLocaleString('ru-RU')}
                    </span>
                  </div>
                  <div 
                    className="order-status"
                    style={{ backgroundColor: getStatusColor(order.status) }}
                  >
                    {getStatusText(order.status)}
                  </div>
                </div>

                <div className="order-customer">
                  <strong>{order.customer.name}</strong>
                  <span>{order.customer.phone}</span>
                  <span>{order.customer.address}</span>
                  {order.customer.notes && (
                    <span className="customer-notes">Примечание: {order.customer.notes}</span>
                  )}
                </div>

                <div className="order-items">
                  <h4>Состав заказа:</h4>
                  {order.items.map(item => (
                    <div key={item.id} className="order-item">
                      <span>{item.name}</span>
                      <span>{item.quantity} × ${item.price} = ${item.quantity * item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="order-total">
                  <strong>Итого: ${order.total}</strong>
                </div>

                <div className="order-actions">
                  <select 
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    disabled={loading}
                    className="status-select"
                  >
                    <option value="new">Новый</option>
                    <option value="confirmed">Подтвержден</option>
                    <option value="preparing">Готовится</option>
                    <option value="delivering">В пути</option>
                    <option value="completed">Выполнен</option>
                    <option value="cancelled">Отменен</option>
                  </select>
                  
                  <button 
                    onClick={() => updateOrderStatus(order.id, 'completed')}
                    disabled={loading || order.status === 'completed'}
                    className="btn-primary"
                  >
                    Завершить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
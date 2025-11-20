

class TelegramService {
  constructor() {
   
    this.botToken = 'YOUR_BOT_TOKEN_HERE';
    this.chatId = 'YOUR_CHAT_ID_HERE';
  }


  async sendOrderNotification(orderData) {
    console.log('📦 Заказ получен (Telegram отключен):', orderData);
    
  
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('✅ Заказ успешно обработан (Telegram уведомление отключено)');
        resolve({ ok: true, mock: true });
      }, 1000);
    });
  }

  async sendStatusNotification(orderId, status, customerPhone) {
    console.log('📦 Статус заказа обновлен:', { orderId, status, customerPhone });
    return { ok: true, mock: true };
  }

 
  formatOrderMessage(orderData) {
    const { order, customer, items, total } = orderData;
    
    const itemsList = items.map(item => 
      `🍓 ${item.name} × ${item.quantity} - $${item.price * item.quantity}`
    ).join('\n');

    return `
🛒 НОВЫЙ ЗАКАЗ #${order.id}

👤 Клиент: ${customer.name}
📞 Телефон: ${customer.phone}
📍 Адрес: ${customer.address}
${customer.notes ? `📝 Примечания: ${customer.notes}` : ''}

📦 Состав заказа:
${itemsList}

💰 Итого: $${total}
⏰ Время заказа: ${new Date().toLocaleString('ru-RU')}
    `.trim();
  }
}


const telegramService = new TelegramService();
export default telegramService;
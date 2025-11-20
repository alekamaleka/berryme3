import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const response = await fetch('https://formspree.io/f/mjvnezan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04</span>
          Контакты
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:taalaibekovaaielita@gmail.com">taalaibekovaaielita@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div>
                <h4>Telegram</h4>
                <a href="https://t.me/qwelita" target="_blank" rel="noopener noreferrer">@qwelita</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/alekamaleka" target="_blank" rel="noopener noreferrer">alekamaleka</a>
              </div>
            </div>
            
            {/* Контактная форма */}
            <div className="contact-form-container">
              <h3>Написать мне</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Имя *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Тема</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Сообщение *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary form-submit"
                  disabled={loading}
                >
                  <span className="btn-icon">📤</span>
                  {loading ? 'Отправка...' : 'Отправить сообщение'}
                </button>
                
                {status === 'success' && (
                  <div className="form-status success">
                    ✅ Сообщение отправлено! Я отвечу в ближайшее время
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="form-status error">
                    ❌ Ошибка отправки. Напишите мне напрямую на taalaibekovaaielita@gmail.com
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="contact-cta">
            <h3>Давайте создавать что-то amazing вместе! ✨</h3>
            <p>Всегда открыта для новых проектов и интересных предложений</p>
            <div className="social-links">
              <a href="mailto:taalaibekovaaielita@gmail.com" className="social-link">
                <span className="social-icon">📧</span>
                Email
              </a>
              <a href="https://t.me/qwelita" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📱</span>
                Telegram
              </a>
              <a href="https://github.com/alekamaleka" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">💻</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
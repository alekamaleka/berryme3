import React from 'react';

const InstagramFeed = () => {
  const instagramPosts = [
    { id: 1, image: "/api/placeholder/300/300", likes: "1.2k", comments: "89" },
    { id: 2, image: "/api/placeholder/300/300", likes: "956", comments: "45" },
    { id: 3, image: "/api/placeholder/300/300", likes: "2.1k", comments: "123" },
    { id: 4, image: "/api/placeholder/300/300", likes: "1.5k", comments: "67" },
    { id: 5, image: "/api/placeholder/300/300", likes: "876", comments: "34" },
    { id: 6, image: "/api/placeholder/300/300", likes: "1.8k", comments: "98" }
  ];

  return (
    <section className="instagram-feed">
      <div className="container">
        <h2 className="section-title">Мы в Instagram</h2>
        <p className="section-subtitle">Следите за нашими работами @berryme.bish</p>
        <div className="instagram-grid">
          {instagramPosts.map(post => (
            <div key={post.id} className="instagram-post">
              <img src={post.image} alt="Instagram post" />
              <div className="post-overlay">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a 
            href="https://www.instagram.com/berryme.bish" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Подписаться в Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
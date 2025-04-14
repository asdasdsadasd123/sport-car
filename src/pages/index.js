import Head from 'next/head'
import { motion } from 'framer-motion'
import { FiArrowRight, FiShare2, FiHeart } from 'react-icons/fi'

export default function Home() {
  const models = [
    {
      id: 1,
      name: "911 Carrera (992)",
      year: 2023,
      power: "385 л.с.",
      acceleration: "4.2 сек",
      speed: "293 км/ч",
      engine: "3.0L Twin-Turbo Flat-6",
      price: "$105,000",
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/model/15a6a09e-51a6-11eb-80d1-005056bbdc38/porsche-model.png",
      color: "Серебристый металлик"
    },
    {
      id: 2,
      name: "911 Turbo S",
      year: 2023,
      power: "650 л.с.",
      acceleration: "2.7 сек",
      speed: "330 км/ч",
      engine: "3.7L Twin-Turbo Flat-6",
      price: "$207,000",
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-tu-modelimage-sideshot/model/7658e724-51a6-11eb-80d1-005056bbdc38/porsche-model.png",
      color: "Графитовый серый"
    },
    {
      id: 3,
      name: "911 GT3",
      year: 2023,
      power: "510 л.с.",
      acceleration: "3.4 сек",
      speed: "320 км/ч",
      engine: "4.0L Naturally Aspirated Flat-6",
      price: "$165,000",
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/5a885fc7-51a6-11eb-80d1-005056bbdc38/porsche-model.png",
      color: "Гоночный желтый"
    },
    {
      id: 4,
      name: "911 Targa 4",
      year: 2023,
      power: "385 л.с.",
      acceleration: "4.4 сек",
      speed: "289 км/ч",
      engine: "3.0L Twin-Turbo Flat-6",
      price: "$117,000",
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-ta4-modelimage-sideshot/model/3a8d1b8e-51a6-11eb-80d1-005056bbdc38/porsche-model.png",
      color: "Красный кармин"
    }
  ];

  return (
    <div className="container">
      <Head>
        <title>Porsche 911 Gallery | Vercel</title>
        <meta name="description" content="Все модели Porsche 911" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="header-content"
        >
          <div className="header-bg"></div>
          <h1>
            <span>Porsche</span>
            <span className="model-name">911</span>
          </h1>
          <p className="subtitle">Легендарный спорткар с 1963 года</p>
          <div className="header-line"></div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="scroll-hint"
          >
            <span>Листайте вниз</span>
            <div className="arrow-down"></div>
          </motion.div>
        </motion.div>
      </header>

      <main className="main">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid"
        >
          {models.map((car, index) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="card"
            >
              <div className="card-badge">NEW {car.year}</div>
              <div className="card-actions">
                <button className="icon-button">
                  <FiHeart />
                </button>
                <button className="icon-button">
                  <FiShare2 />
                </button>
              </div>
              <div className="image-container">
                <img src={car.img} alt={car.name} />
              </div>
              <div className="content">
                <h3>{car.name}</h3>
                <div className="color-indicator" style={{ backgroundColor: getColorHex(car.color) }}></div>
                <span className="color-name">{car.color}</span>
                
                <div className="specs">
                  <div className="spec-item">
                    <span className="spec-label">Разгон:</span>
                    <span className="spec-value">{car.acceleration} (0-100 км/ч)</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Скорость:</span>
                    <span className="spec-value">{car.speed} макс.</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Мощность:</span>
                    <span className="spec-value">{car.power}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Двигатель:</span>
                    <span className="spec-value">{car.engine}</span>
                  </div>
                </div>
                <div className="price-container">
                  <span className="price">{car.price}</span>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="cta-button"
                  >
                    Конфигуратор <FiArrowRight />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Porsche</div>
          <p>Официальный дилер Porsche в России</p>
          <div className="footer-links">
            <a href="#">О компании</a>
            <a href="#">Контакты</a>
            <a href="#">Тест-драйв</a>
            <a href="#">Сервис</a>
          </div>
          <div className="social-links">
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">YouTube</a>
            <a href="#" className="social-icon">Telegram</a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} Porsche 911 Fan Site | Hosted on Vercel
          </div>
        </div>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Porsche Next', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @font-face {
          font-family: 'Porsche Next';
          src: url('https://files.porsche.com/fonts/PorscheNext-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
        }
        
        @font-face {
          font-family: 'Porsche Next';
          src: url('https://files.porsche.com/fonts/PorscheNext-Bold.woff2') format('woff2');
          font-weight: bold;
          font-style: normal;
        }
        
        body {
          background: #f5f5f5;
          color: #1a1a1a;
          line-height: 1.6;
          overflow-x: hidden;
        }
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .header {
          background: #000;
          color: white;
          text-align: center;
          padding: 4rem 1rem 6rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/5a885fc7-51a6-11eb-80d1-005056bbdc38/porsche-model.png') center/cover;
          opacity: 0.15;
          z-index: 0;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .header h1 {
          font-size: 4.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
          display: flex;
          flex-direction: column;
        }
        
        .header h1 span {
          display: inline-block;
        }
        
        .header h1 .model-name {
          color: #d5001c;
          font-size: 5.5rem;
          margin-top: -1rem;
        }
        
        .subtitle {
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2rem;
          font-weight: 300;
        }
        
        .header-line {
          width: 120px;
          height: 3px;
          background: #d5001c;
          margin: 0 auto 2rem;
          border-radius: 3px;
        }
        
        .scroll-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          margin-top: 2rem;
        }
        
        .arrow-down {
          width: 16px;
          height: 16px;
          border-right: 2px solid #d5001c;
          border-bottom: 2px solid #d5001c;
          transform: rotate(45deg);
          margin-top: -4px;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: rotate(45deg) translateY(0);}
          40% {transform: rotate(45deg) translateY(-8px);}
          60% {transform: rotate(45deg) translateY(-4px);}
        }
        
        .main {
          flex: 1;
          padding: 0 1rem;
          max-width: 1400px;
          margin: -3rem auto 0;
          width: 100%;
          position: relative;
          z-index: 2;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2.5rem;
          padding: 1rem;
        }
        
        .card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          will-change: transform;
        }
        
        .card:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .card-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #d5001c;
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 2;
          box-shadow: 0 4px 12px rgba(213, 0, 28, 0.3);
        }
        
        .card-actions {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          gap: 0.5rem;
          z-index: 2;
        }
        
        .icon-button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1a1a1a;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .icon-button:hover {
          background: #d5001c;
          color: white;
          transform: scale(1.1);
        }
        
        .image-container {
          height: 240px;
          overflow: hidden;
          position: relative;
        }
        
        .image-container::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to top, rgba(0,0,0,0.1), transparent);
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .card:hover img {
          transform: scale(1.1);
        }
        
        .content {
          padding: 2rem;
        }
        
        .content h3 {
          color: #1a1a1a;
          margin-bottom: 1rem;
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .color-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-block;
          margin-right: 0.5rem;
          border: 1px solid #eee;
          vertical-align: middle;
        }
        
        .color-name {
          font-size: 0.9rem;
          color: #666;
          vertical-align: middle;
        }
        
        .specs {
          margin: 1.5rem 0;
        }
        
        .spec-item {
          display: flex;
          margin: 1rem 0;
          font-size: 0.95rem;
        }
        
        .spec-label {
          color: #666;
          min-width: 100px;
          font-weight: 500;
        }
        
        .spec-value {
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .price-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #f0f0f0;
        }
        
        .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #d5001c;
        }
        
        .cta-button {
          background: #1a1a1a;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .cta-button:hover {
          background: #d5001c;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(213, 0, 28, 0.3);
        }
        
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 4rem 1rem;
          margin-top: 5rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .footer-logo {
          font-family: 'Porsche Next';
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #d5001c;
        }
        
        .footer p {
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
        }
        
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .footer-links a {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-links a:hover {
          color: #d5001c;
        }
        
        .social-links {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .social-icon {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }
        
        .social-icon:hover {
          color: #d5001c;
        }
        
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
          margin-top: 2rem;
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 3rem 1rem 5rem;
          }
          
          .header h1 {
            font-size: 3rem;
          }
          
          .header h1 .model-name {
            font-size: 4rem;
          }
          
          .subtitle {
            font-size: 1.2rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
          
          .footer-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

function getColorHex(colorName) {
  const colors = {
    "Серебристый металлик": "#c0c0c0",
    "Графитовый серый": "#414141",
    "Гоночный желтый": "#ffd700",
    "Красный кармин": "#960018"
  };
  return colors[colorName] || "#cccccc";
}

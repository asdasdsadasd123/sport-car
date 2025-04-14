import Head from 'next/head'

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
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/model/15a6a09e-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
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
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-tu-modelimage-sideshot/model/7658e724-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
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
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/5a885fc7-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
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
      img: "https://files.porsche.com/filestore/image/multimedia/none/992-ta4-modelimage-sideshot/model/3a8d1b8e-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
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
        <div className="header-content">
          <h1>Porsche 911</h1>
          <p className="subtitle">Легендарный спорткар с 1963 года</p>
          <div className="header-line"></div>
        </div>
      </header>

      <main className="main">
        <div className="grid">
          {models.map(car => (
            <div key={car.id} className="card">
              <div className="card-badge">NEW {car.year}</div>
              <div className="image-container">
                <img src={car.img} alt={car.name} />
              </div>
              <div className="content">
                <h3>{car.name}</h3>
                <div className="specs">
                  <div className="spec-item">
                    <span className="spec-icon">🚀</span>
                    <span>{car.acceleration} (0-100 км/ч)</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">💨</span>
                    <span>{car.speed} макс.</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">⚡</span>
                    <span>{car.power}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-icon">🔧</span>
                    <span>{car.engine}</span>
                  </div>
                </div>
                <div className="price-container">
                  <span className="price">{car.price}</span>
                  <button className="cta-button">Конфигуратор</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2023 Porsche 911 Fan Site | Hosted on Vercel</p>
          <div className="social-links">
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Facebook</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        body {
          background: #f8f8f8;
          color: #1a1a1a;
          line-height: 1.6;
        }
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .header {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          color: white;
          text-align: center;
          padding: 3rem 1rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #d40000 0%, #ff2e2e 100%);
        }
        
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .header h1 {
          color: #ffffff;
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          letter-spacing: -0.05em;
        }
        
        .subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }
        
        .header-line {
          width: 100px;
          height: 2px;
          background: #d40000;
          margin: 0 auto;
        }
        
        .main {
          flex: 1;
          padding: 0 1rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
          padding: 1rem;
        }
        
        .card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          position: relative;
        }
        
        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
        }
        
        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #d40000;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          z-index: 1;
        }
        
        .image-container {
          height: 220px;
          overflow: hidden;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .card:hover img {
          transform: scale(1.08);
        }
        
        .content {
          padding: 1.8rem;
        }
        
        .content h3 {
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .specs {
          margin-bottom: 1.5rem;
        }
        
        .spec-item {
          display: flex;
          align-items: center;
          margin: 0.8rem 0;
          font-size: 0.95rem;
        }
        
        .spec-icon {
          margin-right: 0.8rem;
          font-size: 1.2rem;
        }
        
        .price-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #eee;
        }
        
        .price {
          font-size: 1.3rem;
          font-weight: 700;
          color: #d40000;
        }
        
        .cta-button {
          background: #1a1a1a;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .cta-button:hover {
          background: #d40000;
          transform: translateY(-2px);
        }
        
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 2.5rem 1rem;
          margin-top: 3rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .footer p {
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-icon {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .social-icon:hover {
          color: #d40000;
        }
        
        @media (max-width: 768px) {
          .header h1 {
            font-size: 2.5rem;
          }
          
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

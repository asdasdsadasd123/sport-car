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
        <h1>Porsche 911</h1>
        <p>Легендарный спорткар с 1963 года</p>
      </header>

      <main className="main">
        <div className="grid">
          {models.map(car => (
            <div key={car.id} className="card">
              <div className="image-container">
                <img src={car.img} alt={car.name} />
              </div>
              <div className="content">
                <h3>{car.name} <span>({car.year})</span></h3>
                <ul>
                  <li>🚀 {car.acceleration} (0-100 км/ч)</li>
                  <li>💨 {car.speed} макс.</li>
                  <li>⚡ {car.power}</li>
                  <li>🔧 {car.engine}</li>
                  <li>💰 {car.price}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2023 Porsche 911 Fan Site | Hosted on Vercel</p>
      </footer>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
        }
        
        body {
          background: #f5f5f5;
          color: #333;
          line-height: 1.6;
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
          padding: 2rem;
          margin-bottom: 2rem;
        }
        
        .header h1 {
          color: #d40000;
          font-size: 3rem;
        }
        
        .main {
          flex: 1;
          padding: 0 1rem;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }
        
        .card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        
        .card:hover {
          transform: translateY(-5px);
        }
        
        .image-container {
          height: 200px;
          overflow: hidden;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        
        .card:hover img {
          transform: scale(1.05);
        }
        
        .content {
          padding: 1.5rem;
        }
        
        .content h3 {
          color: #d40000;
          margin-bottom: 1rem;
        }
        
        .content h3 span {
          color: #666;
          font-size: 0.9em;
        }
        
        .content ul {
          list-style: none;
        }
        
        .content li {
          margin: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer {
          background: #222;
          color: white;
          text-align: center;
          padding: 1.5rem;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  )
}

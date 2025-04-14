import Head from 'next/head'
import Image from 'next/image'

export default function Porsche911() {
  const models = [
    {
      id: 1,
      name: "911 Carrera (992)",
      year: 2023,
      stats: [
        { label: "Разгон 0-100", value: "4.2 сек", icon: "⏱️" },
        { label: "Макс. скорость", value: "293 км/ч", icon: "💨" },
        { label: "Мощность", value: "385 л.с.", icon: "⚡" },
        { label: "Двигатель", value: "3.0L Twin-Turbo Flat-6", icon: "🔧" },
        { label: "Цена", value: "$105,000", icon: "💰" }
      ],
      image: "https://files.porsche.com/filestore/image/multimedia/none/992-c2-modelimage-sideshot/model/15a6a09e-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
    },
    {
      id: 2,
      name: "911 Turbo S",
      year: 2023,
      stats: [
        { label: "Разгон 0-100", value: "2.7 сек", icon: "⏱️" },
        { label: "Макс. скорость", value: "330 км/ч", icon: "💨" },
        { label: "Мощность", value: "650 л.с.", icon: "⚡" },
        { label: "Двигатель", value: "3.7L Twin-Turbo Flat-6", icon: "🔧" },
        { label: "Цена", value: "$207,000", icon: "💰" }
      ],
      image: "https://files.porsche.com/filestore/image/multimedia/none/992-tu-modelimage-sideshot/model/7658e724-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
    },
    {
      id: 3,
      name: "911 GT3",
      year: 2023,
      stats: [
        { label: "Разгон 0-100", value: "3.4 сек", icon: "⏱️" },
        { label: "Макс. скорость", value: "320 км/ч", icon: "💨" },
        { label: "Мощность", value: "510 л.с.", icon: "⚡" },
        { label: "Двигатель", value: "4.0L Naturally Aspirated Flat-6", icon: "🔧" },
        { label: "Цена", value: "$165,000", icon: "💰" }
      ],
      image: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/5a885fc7-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Porsche 911 | Легенда с 1963 года</title>
        <meta name="description" content="Все модели Porsche 911" />
      </Head>

      <header className="bg-black text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-2 text-red-600">Porsche 911</h1>
          <p className="text-xl">Легендарный спорткар с 1963 года</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Центральное изображение */}
        <div className="mb-16 flex justify-center">
          <div className="relative w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://files.porsche.com/filestore/image/multimedia/none/992-gt3-modelimage-sideshot/model/5a885fc7-51a6-11eb-80d1-005056bbdc38/porsche-model.png"
              alt="Porsche 911 GT3"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h2 className="text-3xl font-bold">Porsche 911 GT3</h2>
              <p className="text-xl">Идеальный баланс мощности и контроля</p>
            </div>
          </div>
        </div>

        {/* Карточки моделей */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={model.image}
                  alt={model.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-red-600">
                  {model.name} <span className="text-gray-500 text-lg">({model.year})</span>
                </h2>
                <ul className="space-y-3">
                  {model.stats.map((stat, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-lg mr-2">{stat.icon}</span>
                      <div>
                        <p className="font-semibold">{stat.label}</p>
                        <p className="text-gray-600">{stat.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Porsche 911 Enthusiasts. Неофициальный сайт.</p>
        </div>
      </footer>
    </div>
  )
}

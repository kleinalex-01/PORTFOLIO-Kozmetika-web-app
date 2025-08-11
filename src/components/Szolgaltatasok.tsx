import React from 'react'
import { Link } from 'react-router-dom'

const Szolgaltatasok: React.FC = () => {
  const serviceCategories = [
    {
      id: 'arckezelesek',
      title: 'Arckezelések',
      description: 'Professzionális arckezelések minden bőrtípusra, modern technikákkal és prémium termékekkel.',
      icon: '✨',
      link: '/szolgaltatasok/arckezelesek',
      highlights: ['Klasszikus arckezelés', 'Anti-aging kezelés', 'Luxury kezelések']
    },
    {
      id: 'mikrotus',
      title: 'Mikrotűs kezelések',
      description: 'Bőrmegújító kezelések mikrotű technológiával, ráncok csökkentésére és bőrszerkezet javítására.',
      icon: '🔬',
      link: '/szolgaltatasok/mikrotus',
      highlights: ['Dermaroller', 'Meso-roller terápia', 'Vitamin koktél']
    },
    {
      id: 'gyantazas',
      title: 'Gyantázás',
      description: 'Professzionális szőrtelenítés minden testrészre, fájdalommentes technikával és prémium gyantával.',
      icon: '🌟',
      link: '/szolgaltatasok/gyantazas',
      highlights: ['Lábszár', 'Hónalj', 'Bikini vonal', 'Felső ajak']
    },
    {
      id: 'muszempilla',
      title: 'Műszempilla',
      description: 'Professzionális szempilla hosszabbítás és feltöltés különböző technikákkal.',
      icon: '👁️',
      link: '/szolgaltatasok/muszempilla',
      highlights: ['Klasszikus', 'Volume technika', 'Feltöltés']
    },
    {
      id: 'smink',
      title: 'Smink',
      description: 'Professzionális sminkelés minden alkalomra: esküvő, fotózás, ünnepség.',
      icon: '💄',
      link: '/szolgaltatasok/smink',
      highlights: ['Esküvői smink', 'Alkalmi smink', 'Fotózási smink']
    },
    {
      id: 'mukorom',
      title: 'Műköröm',
      description: 'Körömépítés, díszítés és ápolás a legmodernebb technikákkal és minőségi anyagokkal.',
      icon: '💅',
      link: '/szolgaltatasok/mukorom',
      highlights: ['Géllakk', 'Zselé építés', 'Nail Art']
    },
    {
      id: 'lezeres',
      title: 'Lézeres szőrtelenítés',
      description: 'Tartós szőrtelenítés modern IPL technológiával, minden bőrtípusra biztonságosan.',
      icon: '⚡',
      link: '/szolgaltatasok/lezeres',
      highlights: ['Hónalj', 'Lábszár', 'Bikini vonal', 'Arc']
    },
    {
      id: 'egyeb',
      title: 'Egyéb szolgáltatások',
      description: 'Kiegészítő szépségápolási szolgáltatások és speciális kezelések.',
      icon: '🎯',
      link: '/szolgaltatasok/egyeb',
      highlights: ['Szemöldök formázás', 'Wellness masszázs', 'Tanácsadás']
    }
  ]

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="page-section">
            <div className="services-header text-center mb-5">
              <h1>Szolgáltatásaink</h1>
              <p className="services-intro">
                Fedezze fel széles körű szépségápolási szolgáltatásainkat! 
                Minden kezelést tapasztalt szakembereink végeznek, 
                a legmodernebb technikákkal és prémium termékekkel.
              </p>
            </div>

            {/* Service Categories Grid */}
            <div className="services-grid">
              <div className="row">
                {serviceCategories.map((category) => (
                  <div key={category.id} className="col-lg-6 col-md-12 mb-4">
                    <Link to={category.link} className="service-category-card">
                      <div className="category-header">
                        <div className="category-icon">{category.icon}</div>
                        <h3>{category.title}</h3>
                      </div>
                      <div className="category-content">
                        <p className="category-description">{category.description}</p>
                        <div className="category-highlights">
                          <strong>Kiemelkedő szolgáltatások:</strong>
                          <ul>
                            {category.highlights.map((highlight, index) => (
                              <li key={index}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="category-cta">
                          <span className="cta-text">Részletek megtekintése →</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="services-contact mt-5">
              <div className="contact-banner">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h4>Nem találja amit keres?</h4>
                    <p>Szívesen segítünk kiválasztani a legmegfelelőbb kezelést! Hívjon minket vagy írjon üzenetet.</p>
                  </div>
                  <div className="col-lg-4 text-lg-end text-center">
                    <a href="tel:+36306345853" className="btn btn-custom btn-lg me-2 mb-2">
                      📞 Hívjon most
                    </a>
                    <Link to="/kapcsolat" className="btn btn-outline-custom btn-lg mb-2">
                      💌 Kapcsolat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Szolgaltatasok

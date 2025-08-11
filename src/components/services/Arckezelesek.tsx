import React from 'react'
import { Link } from 'react-router-dom'

const Arckezelesek: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Breadcrumb Navigation */}
          <nav aria-label="breadcrumb" className="service-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/szolgaltatasok">Szolgáltatások</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Arckezelések
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Arckezelések</h1>
              <p className="service-intro">
                Professzionális arckezelések minden bőrtípusra, 
                a legmodernebb technikákkal és prémium termékekkel.
              </p>
            </div>

            {/* Service Grid */}
            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      {/* Photo/Video placeholder - you can replace with your media */}
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Klasszikus arckezelés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Klasszikus arckezelés</h3>
                      <p>Bőrtípus meghatározás, tisztítás, gőzölés, mitesszer eltávolítás, arctorna, maszk.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 60 perc</span>
                        <span className="price">💰 8.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Luxury arckezelés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Luxury arckezelés</h3>
                      <p>Prémium termékekkel végzett teljes arckezelés, speciális masszázstechnikákkal.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 90 perc</span>
                        <span className="price">💰 12.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Anti-aging kezelés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Anti-aging kezelés</h3>
                      <p>Ránctalanító és bőrfeszesítő kezelés speciális hatóanyagokkal.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 75 perc</span>
                        <span className="price">💰 15.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Problémás bőr kezelése</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Problémás bőr kezelése</h3>
                      <p>Pattanásos, zsíros bőrre specializált kezelés gyulladáscsökkentő hatással.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 70 perc</span>
                        <span className="price">💰 10.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Foglaljon időpontot arckezelésre!</h4>
                <p>Szakértő kozmetikusunk személyre szabott kezelést biztosít az Ön bőrének.</p>
                <div className="cta-buttons">
                  <a href="tel:+36306345853" className="btn btn-service-primary btn-lg me-3">
                    📞 Hívjon most
                  </a>
                  <Link to="/kapcsolat" className="btn btn-service-secondary btn-lg">
                    💌 Üzenet küldése
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Arckezelesek

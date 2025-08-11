import React from 'react'
import { Link } from 'react-router-dom'

const Mikrotus: React.FC = () => {
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
                Mikrotűs kezelések
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Mikrotűs kezelések</h1>
              <p className="service-intro">
                Modern mikrotűs technológia a bőr megújítására, 
                ráncok csökkentésére és bőrszerkezet javítására.
              </p>
            </div>

            {/* Service Grid */}
            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Dermaroller kezelés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Dermaroller kezelés</h3>
                      <p>Apró mikrotűkkel végzett bőrmegújító kezelés, kollagéntermelés serkentésére.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 45 perc</span>
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
                        <p>Meso-roller terápia</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Meso-roller terápia</h3>
                      <p>Intenzív mikrotűs kezelés speciális szérumokkal, mélyebb hatás eléréséért.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 60 perc</span>
                        <span className="price">💰 18.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Mikrotűs + vitamin koktél</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Mikrotűs + vitamin koktél</h3>
                      <p>Mikrotűs kezelés egyedi összetételű vitamin koktéllal kombinálva.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 75 perc</span>
                        <span className="price">💰 22.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Hegszövet kezelés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Hegszövet kezelés</h3>
                      <p>Speciális mikrotűs kezelés hegszövetek és narancsbőr javítására.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 90 perc</span>
                        <span className="price">💰 25.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Érdeklődik a mikrotűs kezelésekről?</h4>
                <p>Konzultáció során felmérjük bőrének állapotát és kiválasztjuk a legmegfelelőbb kezelést.</p>
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

export default Mikrotus

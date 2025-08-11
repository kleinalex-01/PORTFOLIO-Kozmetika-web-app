import React from 'react'
import { Link } from 'react-router-dom'

const Muszempilla: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb" className="service-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/szolgaltatasok">Szolgáltatások</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Műszempilla
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Műszempilla</h1>
              <p className="service-intro">
                Professzionális műszempilla szolgáltatások: feltöltés, új készítés 
                és karbantartás a legmodernebb technikákkal.
              </p>
            </div>

            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Klasszikus műszempilla</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Klasszikus műszempilla</h3>
                      <p>1:1 arányú szempilla hosszabbítás természetes hatásért.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 120 perc</span>
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
                        <p>Volume szempilla</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Volume műszempilla</h3>
                      <p>2D-6D térfogatos szempilla technika dúsabb hatásért.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 150 perc</span>
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
                        <p>Szempilla feltöltés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Szempilla feltöltés</h3>
                      <p>Meglévő műszempilla karbantartása és feltöltése 2-3 hét után.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 90 perc</span>
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
                        <p>Szempilla eltávolítás</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Műszempilla eltávolítás</h3>
                      <p>Biztonságos és kíméletes műszempilla eltávolítás speciális oldószerrel.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 45 perc</span>
                        <span className="price">💰 4.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Műszempilla szolgáltatások</h4>
                <p>Tapasztalt szempilla stylistunk segít elérni az álmai tekintetét!</p>
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

export default Muszempilla

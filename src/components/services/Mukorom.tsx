import React from 'react'
import { Link } from 'react-router-dom'

const Mukorom: React.FC = () => {
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
                Műköröm
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Műköröm szolgáltatások</h1>
              <p className="service-intro">
                Professzionális körömépítés és díszítés: géllakk, zselé építés, 
                nail art és körömápolás a legmagasabb színvonalon.
              </p>
            </div>

            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Géllakk manikűr</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Géllakk manikűr</h3>
                      <p>Tartós géllakk felvitel professzionális körömápolással kombinálva.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 60 perc</span>
                        <span className="price">💰 4.500 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Zselé körömépítés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Zselé körömépítés</h3>
                      <p>Erős és tartós műköröm építése zselével, egyedi formázással.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 120 perc</span>
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
                        <p>Nail art díszítés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Nail Art díszítés</h3>
                      <p>Kreatív körömművészet: festés, strassz, fólia alkalmazás egyedi mintákkal.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 90 perc</span>
                        <span className="price">💰 6.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Műköröm feltöltés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Műköröm feltöltés</h3>
                      <p>Meglévő műköröm karbantartása és megújítása 2-3 heti rendszerességgel.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 75 perc</span>
                        <span className="price">💰 5.500 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Gyönyörű körmök minden alkalomra</h4>
                <p>Tapasztalt körmös szakemberünk egyedi dizájnnal készíti el álmai körömét!</p>
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

export default Mukorom

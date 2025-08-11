import React from 'react'
import { Link } from 'react-router-dom'

const Gyantazas: React.FC = () => {
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
                Gyantázás
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Gyantázás</h1>
              <p className="service-intro">
                Professzionális szőrtelenítés minőségi gyantával, 
                minden testrészre alkalmazva, fájdalommentes technikával.
              </p>
            </div>

            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Lábszár gyantázás</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Lábszár gyantázás</h3>
                      <p>Teljes lábszár szőrtelenítése prémium gyantával, utókezeléssel.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 30 perc</span>
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
                        <p>Hónalj gyantázás</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Hónalj gyantázás</h3>
                      <p>Gyors és hatékony hónalj szőrtelenítés, érzékeny bőrre alkalmas gyantával.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 15 perc</span>
                        <span className="price">💰 2.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Bikini vonal</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Bikini vonal gyantázás</h3>
                      <p>Diszkrét és higiénikus bikini vonal kezelés tapasztalt szakemberrel.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 20 perc</span>
                        <span className="price">💰 3.500 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Felső ajak gyantázás</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Felső ajak gyantázás</h3>
                      <p>Precíz szőrtelenítés az érzékeny arcbőrön, speciális gyantával.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 10 perc</span>
                        <span className="price">💰 1.500 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Foglaljon időpontot gyantázásra!</h4>
                <p>Fájdalommentes és hosszantartó eredmény prémium gyantázási szolgáltatásainkkal.</p>
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

export default Gyantazas

import React from 'react'
import { Link } from 'react-router-dom'

const Lezeres: React.FC = () => {
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
                Lézeres szőrtelenítés
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Lézeres szőrtelenítés</h1>
              <p className="service-intro">
                Modern IPL technológiával végzett tartós szőrtelenítés 
                minden bőrtípusra biztonságosan alkalmazható.
              </p>
            </div>

            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Hónalj lézer</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Hónalj lézeres szőrtelenítés</h3>
                      <p>Gyors és hatékony hónalj kezelés IPL technológiával, tartós eredménnyel.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 15 perc</span>
                        <span className="price">💰 8.000 Ft/alkalom</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Lábszár lézer</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Lábszár lézeres kezelés</h3>
                      <p>Teljes lábszár szőrtelenítése modern lézer technológiával.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 45 perc</span>
                        <span className="price">💰 18.000 Ft/alkalom</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Bikini vonal lézer</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Bikini vonal lézeres kezelés</h3>
                      <p>Diszkrét és fájdalommentes intim területi szőrtelenítés.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 20 perc</span>
                        <span className="price">💰 12.000 Ft/alkalom</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Arc lézer</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Arcszőrzet lézeres eltávolítás</h3>
                      <p>Precíz arcszőrzet kezelés érzékeny bőrre optimalizált beállításokkal.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 25 perc</span>
                        <span className="price">💰 6.000 Ft/alkalom</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-info-box mt-5">
              <div className="info-content">
                <h4>Lézeres szőrtelenítés információk</h4>
                <ul className="info-list">
                  <li>🔬 Modern IPL technológia minden bőrtípusra</li>
                  <li>⚡ Gyors és fájdalommentes kezelés</li>
                  <li>🎯 Tartós eredmény 6-8 kezelés után</li>
                  <li>🛡️ Biztonságos és higiénikus környezet</li>
                  <li>📋 Ingyenes konzultáció és bőrvizsgálat</li>
                </ul>
              </div>
            </div>

            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Érdeklődik a lézeres szőrtelenítésről?</h4>
                <p>Ingyenes konzultáció során felmérjük bőrének alkalmasságát és összeállítjuk kezelési tervét.</p>
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

export default Lezeres

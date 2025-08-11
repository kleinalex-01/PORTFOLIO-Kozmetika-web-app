import React from 'react'
import { Link } from 'react-router-dom'

const Egyeb: React.FC = () => {
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
                Egyéb szolgáltatások
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Egyéb szolgáltatások</h1>
              <p className="service-intro">
                Kiegészítő szépségápolási szolgáltatások a teljes wellness élményért, 
                speciális kezelések és tanácsadások.
              </p>
            </div>

            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Szemöldök formázás</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Szemöldök formázás és festés</h3>
                      <p>Professzionális szemöldök alakítás csipesszel és festéssel, arcformához igazítva.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 30 perc</span>
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
                        <p>Henna festés</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Henna szemöldök és szempilla festés</h3>
                      <p>Természetes henna festékekkel végzett tartós szemöldök és szempilla színezés.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 45 perc</span>
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
                        <p>Bőrtípus vizsgálat</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Bőrtípus meghatározás és tanácsadás</h3>
                      <p>Részletes bőrvizsgálat személyre szabott ápolási rutinnal és termékajánlással.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 30 perc</span>
                        <span className="price">💰 5.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Wellness masszázs</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Relaxáló wellness masszázs</h3>
                      <p>Stresszoldó és pihentető masszázs illóolajokkal, teljes kikapcsolódás.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 60 perc</span>
                        <span className="price">💰 10.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Csoportos kezelések</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Csoportos beauty party</h3>
                      <p>Barátnőkkel közösen élvezhető beauty élmény: mini kezelések és tanácsadás.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 120 perc</span>
                        <span className="price">💰 Egyéni árajánlat</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Ajándékkártya</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Ajándékkártya és csomagok</h3>
                      <p>Egyedi értékű ajándékkártyák és szolgáltatás csomagok kedvezményes áron.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ Választható</span>
                        <span className="price">💰 5.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Egyedi igényei vannak?</h4>
                <p>Szívesen összeállítunk Önnek személyre szabott kezelési csomagot!</p>
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

export default Egyeb

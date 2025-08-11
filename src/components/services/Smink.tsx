import React from 'react'
import { Link } from 'react-router-dom'

const Smink: React.FC = () => {
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
                Smink
              </li>
            </ol>
          </nav>

          <section className="service-detail-section">
            <div className="service-header">
              <h1>Smink szolgáltatások</h1>
              <p className="service-intro">
                Professzionális sminkelés minden alkalomra: esküvő, fotózás, 
                ünnepség vagy hétköznapi elegancia.
              </p>
            </div>

            <div className="service-grid mt-5">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="service-item-card">
                    <div className="service-media">
                      <div className="media-placeholder">
                        <span>📸 Kép/Videó</span>
                        <p>Esküvői smink</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Esküvői smink</h3>
                      <p>Tökéletes menyasszonyi smink előzetes próbával, hosszantartó hatással.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 90 perc</span>
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
                        <p>Alkalmi smink</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Alkalmi smink</h3>
                      <p>Elegáns smink különleges alkalmakra: bálok, partik, ünnepségek.</p>
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
                        <p>Fotózási smink</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Fotózási smink</h3>
                      <p>Speciális smink technika fotózásokhoz és videofelvételekhez.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 75 perc</span>
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
                        <p>Smink tanácsadás</p>
                      </div>
                    </div>
                    <div className="service-content">
                      <h3>Személyes smink tanácsadás</h3>
                      <p>Egyéni smink konzultáció, termékajánlás és technika oktatás.</p>
                      <div className="service-details">
                        <span className="duration">⏱️ 45 perc</span>
                        <span className="price">💰 6.000 Ft-tól</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-cta mt-5">
              <div className="cta-content text-center">
                <h4>Varázsos smink minden alkalomra</h4>
                <p>Professzionális smink artistánk kiemeli természetes szépségét!</p>
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

export default Smink

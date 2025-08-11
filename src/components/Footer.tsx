import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="salon-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="footer-section">
              <h5>Healthy Skin Kozmetika</h5>
              <p className="footer-address">
                <i className="location-icon">📍</i>
                8237 Tihany, Aranyház u. 18
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="footer-section">
              <p className="footer-copyright">
                © {currentYear} Healthy Skin Kozmetika
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr className="footer-divider" />
            <p className="footer-tagline text-center">
              Ahol a szépség és wellness találkozik
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

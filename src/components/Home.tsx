import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      {/* Video Hero Section */}
      <section className="hero-video-section">
        <div className="hero-video-container">
          {/* Video Background - you can replace with your salon video */}
          <div className="hero-video-placeholder">
            {/* Video with mobile optimization */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              preload="metadata"
              poster="/szalon-hero-image.jpg"
              onError={(e) => {
                // Hide video and show background image on error
                e.currentTarget.style.display = 'none';
              }}
            >
              <source src="/szalon-video.mp4" type="video/mp4" />
              <source src="/szalon-video.webm" type="video/webm" />
              {/* Fallback for browsers that don't support video */}
              <p>Your browser doesn't support video playback.</p>
            </video>
          </div>
          
          {/* Overlay with welcome message */}
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title">Healthy Skin Kozmetika</h1>
              <h2 className="hero-subtitle">Üdvözöljük az exkluzív szépségélmény világában</h2>
              <p className="hero-description">
                Fedezze fel prémium kozmetikai kezeléseink kínálatát, amelyeket a modern nő igényeire szabtunk
              </p>
              <div className="hero-buttons">
                <a href="tel:+36306345853" className="btn btn-custom btn-lg">
                  Foglaljon időpontot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular content container for other sections */}
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            {/* Featured Services Preview */}
            <section className="featured-services">
              <h3 className="text-center mb-4">Legnépszerűbb kezeléseink</h3>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="feature-card">
                    <h5>Luxury arckezelés</h5>
                    <p>Teljes megújulás prémium termékekkel</p>
                    <span className="price-hint">12.000 Ft-tól</span>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card">
                    <h5>Anti-aging kezelés</h5>
                    <p>Fiatalító kezelés a ráncok ellen</p>
                    <span className="price-hint">15.000 Ft-tól</span>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card">
                    <h5>Wellness masszázs</h5>
                    <p>Teljes relaxáció és regeneráció</p>
                    <span className="price-hint">10.000 Ft-tól</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

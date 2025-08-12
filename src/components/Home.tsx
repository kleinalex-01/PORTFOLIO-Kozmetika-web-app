import React, { useState, useEffect } from 'react'

const Home: React.FC = () => {
  const [currentLedImage, setCurrentLedImage] = useState(0)
  
  const ledImages = [
    '/led-treatment/genoled-1.png',
    '/led-treatment/genoled-2.png',
    '/led-treatment/genoled-3.png'
  ]

  // Fix mobile viewport height issue
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    
    setVH()
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', setVH)
    
    return () => {
      window.removeEventListener('resize', setVH)
      window.removeEventListener('orientationchange', setVH)
    }
  }, [])

  // Auto-slide LED images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLedImage(prev => (prev + 1) % ledImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [ledImages.length])
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

      {/* Treatment Sections - Each taking 100vh */}
      
      {/* LED Treatment Section */}
      <section className="treatment-section led-treatment">
        <div className="treatment-container">
          <div className="treatment-content">
            <div className="treatment-info">
              <h2 className="treatment-title">LED Fényterápia</h2>
              <p className="treatment-description">
                Modern LED technológia a bőr megújítására és regenerálására. 
                A különböző fényhullámok stimulálják a kollagén termelést és javítják a bőr textúráját.
              </p>
              <div className="treatment-benefits">
                <ul>
                  <li>Ránctalanító hatás</li>
                  <li>Gyulladáscsökkentő</li>
                  <li>Bőrmegújító</li>
                  <li>Fájdalommentes kezelés</li>
                </ul>
              </div>
            </div>
            <div className="treatment-visual">
              {/* LED Image Carousel inside the card */}
              <div className="led-image-carousel">
                {ledImages.map((image, index) => (
                  <div
                    key={index}
                    className={`led-carousel-slide ${index === currentLedImage ? 'active' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`LED kezelés ${index + 1}`}
                      className="led-treatment-image"
                    />
                  </div>
                ))}
                
                {/* Text overlay */}
                <div className="led-text-overlay">
                  <h3 className="led-overlay-title">GENO-LED</h3>
                  <p className="led-overlay-subtitle">Alacsony intenzitású LED fény</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pin Treatment Section */}
      <section className="treatment-section pin-treatment">
        <div className="treatment-container">
          <div className="treatment-content reverse">
            <div className="treatment-visual">
              <div className="treatment-placeholder">Pin Kezelés</div>
            </div>
            <div className="treatment-info">
              <h2 className="treatment-title">Pin Kezelés</h2>
              <p className="treatment-description">
                Precíz mikroinjekciós technológia a bőr mélyrétegeit célzó hatóanyagok bejuttatására. 
                Látható eredmények már az első kezelés után.
              </p>
              <div className="treatment-benefits">
                <ul>
                  <li>Mély hidratálás</li>
                  <li>Azonnali hatás</li>
                  <li>Személyre szabott kezelés</li>
                  <li>Minimálisan invazív</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Face Massage Treatment Section */}
      <section className="treatment-section face-massage">
        <div className="treatment-container">
          <div className="treatment-content">
            <div className="treatment-info">
              <h2 className="treatment-title">Arcmasszázs Kezelés</h2>
              <p className="treatment-description">
                Relaxáló és feszesítő arcmasszázs speciális technikákkal. 
                Javítja a vérkeringést és természetes ragyogást ad az arcnak.
              </p>
              <div className="treatment-benefits">
                <ul>
                  <li>Stresszoldó hatás</li>
                  <li>Vérkeringés javítása</li>
                  <li>Természetes lifting</li>
                  <li>Relaxáló élmény</li>
                </ul>
              </div>
            </div>
            <div className="treatment-visual">
              <div className="treatment-placeholder">Arcmasszázs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Laser Hair Removal Section */}
      <section className="treatment-section laser-hair-removal">
        <div className="treatment-container">
          <div className="treatment-content reverse">
            <div className="treatment-visual">
              <div className="treatment-placeholder">Lézeres Szőrtelenítés</div>
            </div>
            <div className="treatment-info">
              <h2 className="treatment-title">Lézeres Szőrtelenítés</h2>
              <p className="treatment-description">
                Hatékony és tartós szőrtelenítés a legmodernebb lézer technológiával. 
                Biztonságos minden bőrtípusra, tartós eredményekkel.
              </p>
              <div className="treatment-benefits">
                <ul>
                  <li>Tartós eredmény</li>
                  <li>Fájdalommentes</li>
                  <li>Minden bőrtípusra</li>
                  <li>Precíz kezelés</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Wax Treatment Section */}
      <section className="treatment-section body-wax">
        <div className="treatment-container">
          <div className="treatment-content">
            <div className="treatment-info">
              <h2 className="treatment-title">Gyantázás</h2>
              <p className="treatment-description">
                Professzionális gyantázás prémium termékekkel minden testrészre. 
                Gyengéd, de hatékony eltávolítás hosszantartó eredménnyel.
              </p>
              <div className="treatment-benefits">
                <ul>
                  <li>Hosszantartó simítás</li>
                  <li>Gyengéd formula</li>
                  <li>Professzionális kivitelezés</li>
                  <li>Minden testrészre</li>
                </ul>
              </div>
            </div>
            <div className="treatment-visual">
              <div className="treatment-placeholder">Gyantázás</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

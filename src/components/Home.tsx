import React, { useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'

const Home: React.FC = () => {
  const [currentLedImage, setCurrentLedImage] = useState(0)
  const [currentMicroneedleImage, setCurrentMicroneedleImage] = useState(0)
  const [currentUltrasoundImage, setCurrentUltrasoundImage] = useState(0)
  const [currentSteamImage, setCurrentSteamImage] = useState(0)
  
  const ledImages = [
    '/led-treatment/genoled-1.png',
    '/led-treatment/genoled-2.png',
    '/led-treatment/genoled-3.png'
  ]

  const microneedleImages = [
    '/microneedle-treatment/microneedle-1.png',
    '/microneedle-treatment/microneedle-2.png',
    '/microneedle-treatment/microneedle-3.png'
  ]

  const ultrasoundImages = [
    '/ultrasound-galvanic/ultrasound-1.png',
    '/ultrasound-galvanic/ultrasound-2.png',
    '/ultrasound-galvanic/ultrasound-3.png'
  ]
  const steamImages = [
    '/steamin-cleaning/steaming-1.png',
    '/steamin-cleaning/steaming-2.png',
    '/steamin-cleaning/steaming-3.png'
  ]

  // Auto-slide LED images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLedImage(prev => (prev + 1) % ledImages.length)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [ledImages.length])

  // Auto-slide Microneedle images every 5 seconds (different timing)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMicroneedleImage(prev => (prev + 1) % microneedleImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [microneedleImages.length])

  // Auto-slide Ultrasound images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUltrasoundImage(prev => (prev + 1) % ultrasoundImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [ultrasoundImages.length])

  // Auto-slide Steam images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSteamImage(prev => (prev + 1) % steamImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [steamImages.length])

  return (
    <div className="home">
      {/* Hero Section - Full Height with Video Background */}
      <section className="hero-section">
        <div className="hero-video-background">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/szalon-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-logo">
              <img src="/szalon-logo.jpg" alt="Healthy Skin Kozmetika Logo" className="salon-logo" />
            </div>
            <h1 className="salon-name">Healthy Skin Kozmetika</h1>
          </div>
        </div>
      </section>
      
      {/* LED Treatment Section */}
      <AnimatedSection>
        <section className="treatment-section led-treatment">
          <div className="treatment-container">
            {/* Desktop Layout */}
            <div className="treatment-content desktop-layout">
              <div className="treatment-info clickable-element">
                <h2 className="treatment-title">GENO-LED Fényterápia</h2>
                <h3 className="treatment-subtitle">Professzionális anti-aging kezelés</h3>
                <p className="treatment-description">
                  A GENO-LED forradalmi fényterápiája természetes módon stimulálja a bőr megújulását. 
                  Fájdalommentes, biztonságos kezelés amely láthatóan fiatalabb, ragyogóbb bőrt eredményez 
                  már az első alkalmak után.
                </p>
                <div className="treatment-benefits">
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">✨</span>
                      <div>
                        <strong>Ránctalanítás</strong>
                        <p>Láthatóan csökkenti a ráncokat és finom vonalakat</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">💧</span>
                      <div>
                        <strong>Mély hidratálás</strong>
                        <p>Növeli a bőr nedvességtartalmát és rugalmasságát</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🌟</span>
                      <div>
                        <strong>Ragyogó bőr</strong>
                        <p>Egyenletes bőrtónus és természetes fény</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🎯</span>
                      <div>
                        <strong>Kollagén stimuláció</strong>
                        <p>Természetesen serkenti a kollagén termelődést</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">⏰</span>
                      <div>
                        <strong>Gyors eredmény</strong>
                        <p>Látható javulás már néhány kezelés után</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🛡️</span>
                      <div>
                        <strong>100% biztonságos</strong>
                        <p>Fájdalommentes, mellékhatás-mentes kezelés</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="led-tech-specs">
                  <h4>Miért választják a nők világszerte?</h4>
                  <ul>
                    <li><strong>Természetes anti-aging</strong> - műtét és injekció nélkül</li>
                    <li><strong>Azonnali eredmény</strong> - ragyogó bőr minden kezelés után</li>
                    <li><strong>Hosszantartó hatás</strong> - tartós szépség befektetés</li>
                    <li><strong>Kényelmes kezelés</strong> - relaxáló 20-30 perces szépségpillanat</li>
                  </ul>
                </div>
              </div>
              <div className="treatment-visual clickable-element">
                {/* Desktop: Modern grid layout */}
                <div className="led-image-grid desktop-only">
                  <div className="grid-top">
                    <div className="grid-image-small">
                      <img 
                        src={ledImages[0]} 
                        alt="GENO-LED kezelés 1"
                        className="led-treatment-image"
                      />
                    </div>
                    <div className="grid-image-small">
                      <img 
                        src={ledImages[1]} 
                        alt="GENO-LED kezelés 2"
                        className="led-treatment-image"
                      />
                    </div>
                  </div>
                  <div className="home">
                    {/* Hero Section - Full Height with Video Background */}
                    <section className="hero-section">
                      ...existing code...
                    </section>
                    {/* LED Treatment Section */}
                    <AnimatedSection>
                      ...existing code...
                    </AnimatedSection>
                    {/* GENOSYS Micro Needling Treatment Section */}
                    <AnimatedSection delay={0.2}>
                      ...existing code...
                    </AnimatedSection>
                    {/* Ultrahang + Galván kezelés Section */}
                    <AnimatedSection delay={0.4}>
                      ...existing code...
                    </AnimatedSection>
                    {/* Gőzölés + Arctisztítás Section */}
                    <AnimatedSection delay={0.6}>
                      ...existing code...
                    </AnimatedSection>
                    {/* Closing Section */}
                    <div className="closing-section">
                      <div className="closing-content">
          <h2 className="closing-title">És még sok más</h2>
                        <h2 className="closing-title">És még sok más...</h2>
                        <p className="closing-subtitle">Ha bármi kérdése van, hívjon bátran!</p>
                        <a href="tel:+36201234567" className="call-button">Telefonos kapcsolat</a>
          <a href="tel:+36201234567" className="call-button">
            <span className="call-icon" aria-hidden="true">📞</span> Telefonos kapcsolat
          </a>
                      </div>
                    </div>
                  </div>
                  {/* Enhanced Text overlay */}
                  <div className="led-text-overlay">
                    <h3 className="led-overlay-title geno-led-big">GENO-LED</h3>
                    <p className="led-overlay-subtitle">Professzionális fényterápia</p>
                  </div>
                  
                  {/* Carousel indicators */}
                  <div className="led-indicators">
                    {ledImages.map((_, index) => (
                      <button
                        key={index}
                        className={`led-indicator ${index === currentLedImage ? 'active' : ''}`}
                        onClick={() => setCurrentLedImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Card Layout */}
            <div className="mobile-treatment-card">
              <div className="mobile-card-visual">
                <div className="led-image-carousel mobile-carousel">
                  {ledImages.map((image, index) => (
                    <div
                      key={index}
                      className={`led-carousel-slide ${index === currentLedImage ? 'active' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`GENO-LED kezelés ${index + 1}`}
                        className="led-treatment-image"
                      />
                    </div>
                  ))}
                  
                  {/* Enhanced mobile overlay */}
                  <div className="led-text-overlay mobile-overlay">
                    <h3 className="led-overlay-title geno-led-big">GENO-LED</h3>
                    <p className="led-overlay-subtitle">Professzionális fényterápia</p>
                  </div>
                </div>
              </div>
              <div className="mobile-card-info">
                <h2 className="treatment-title">GENO-LED Fényterápia</h2>
                <h3 className="treatment-subtitle">Professzionális anti-aging kezelés</h3>
                <p className="treatment-description">
                  Forradalmi fényterápia a természetes bőrmegújulásért. 
                  Fájdalommentes kezelés láthatóan fiatalabb, ragyogóbb bőrért.
                </p>
                <div className="treatment-benefits">
                  <ul>
                    <li>✨ Ránctalanító hatás</li>
                    <li>💧 Mély hidratálás</li>
                    <li>🌟 Ragyogó bőrtónus</li>
                    <li>🎯 Kollagén stimuláció</li>
                    <li>⏰ Gyors eredmény</li>
                    <li>🛡️ 100% biztonságos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* GENOSYS Micro Needling Treatment Section */}
      <AnimatedSection delay={0.2}>
        <section className="treatment-section microneedle-treatment">
          <div className="treatment-container">
            {/* Desktop Layout */}
            <div className="treatment-content reverse desktop-layout">
              <div className="treatment-visual clickable-element">
                {/* Desktop: Modern grid layout */}
                <div className="microneedle-image-grid desktop-only">
                  <div className="grid-top">
                    <div className="grid-image-small">
                      <img 
                        src={microneedleImages[0]} 
                        alt="GENOSYS Micro Needling kezelés 1"
                        className="microneedle-treatment-image"
                      />
                    </div>
                    <div className="grid-image-small">
                      <img 
                        src={microneedleImages[1]} 
                        alt="GENOSYS Micro Needling kezelés 2"
                        className="microneedle-treatment-image"
                      />
                    </div>
                  </div>
                  <div className="grid-bottom">
                    <div className="grid-image-large">
                      <img 
                        src={microneedleImages[2]} 
                        alt="GENOSYS Micro Needling kezelés 3"
                        className="microneedle-treatment-image"
                      />
                      <div className="grid-overlay">
                        <h3 className="grid-title">GENOSYS</h3>
                        <p className="grid-subtitle">Micro Needling</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile: carousel */}
                <div className="microneedle-image-carousel mobile-only">
                  {microneedleImages.map((image, index) => (
                    <div
                      key={index}
                      className={`microneedle-carousel-slide ${index === currentMicroneedleImage ? 'active' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`GENOSYS Micro Needling kezelés ${index + 1}`}
                        className="microneedle-treatment-image"
                      />
                    </div>
                  ))}
                  
                  {/* Enhanced Text overlay */}
                  <div className="microneedle-text-overlay">
                    <h3 className="microneedle-overlay-title genosys-big">GENOSYS</h3>
                    <p className="microneedle-overlay-subtitle">Micro Needling</p>
                  </div>
                  
                  {/* Carousel indicators */}
                  <div className="microneedle-indicators">
                    {microneedleImages.map((_, index) => (
                      <button
                        key={index}
                        className={`microneedle-indicator ${index === currentMicroneedleImage ? 'active' : ''}`}
                        onClick={() => setCurrentMicroneedleImage(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="treatment-info clickable-element">
                <h2 className="treatment-title">GENOSYS Micro Needling</h2>
                <h3 className="treatment-subtitle">Professzionális bőrmegújító kezelés</h3>
                <p className="treatment-description">
                  A GENOSYS Needle Pen-K mikrocsatornákat képez, melyeken keresztül a hatóanyag közvetlenül 
                  a bőrbe juthat. A természetes gyógyulási folyamat aktiválódik, kollagénindukciót vált ki 
                  és elősegíti a bőr megújulását.
                </p>
                <div className="treatment-benefits">
                  <div className="benefits-grid">
                    <div className="benefit-item">
                      <span className="benefit-icon">🔬</span>
                      <div>
                        <strong>Természetes sebgyógyulás</strong>
                        <p>Aktiválja a kollagénindukciót és bőrmegújulást</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">💪</span>
                      <div>
                        <strong>Bőrfeszesítés</strong>
                        <p>Feszesíti és liftingeli a bőr szerkezetét</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">✨</span>
                      <div>
                        <strong>Fehérítő hatás</strong>
                        <p>Egyenletes bőrtónus és ránctalanító hatás</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🔄</span>
                      <div>
                        <strong>Hegjavítás</strong>
                        <p>Javítja az aknés és égési hegeket</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">🌟</span>
                      <div>
                        <strong>Striakezelés</strong>
                        <p>Javítja a striákat és a bőr textúráját</p>
                      </div>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">💧</span>
                      <div>
                        <strong>Póruskezelés</strong>
                        <p>Összehúzza a pórusokat és kezeli a hajhullást</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="led-tech-specs">
                  <h4>GENOSYS Needle Pen-K előnyei</h4>
                  <ul>
                    <li><strong>Transzdermális szállítás</strong> - közvetlen hatóanyag bejuttatás</li>
                    <li><strong>Természetes folyamat</strong> - saját kollagén és elasztin termelés</li>
                    <li><strong>Sokoldalú kezelés</strong> - arcra, testre és fejbőrre egyaránt</li>
                    <li><strong>Minimális leállás</strong> - gyors regeneráció időszak</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Mobile Card Layout */}
            <div className="mobile-treatment-card">
              <div className="mobile-card-visual">
                <div className="microneedle-image-carousel mobile-carousel">
                  {microneedleImages.map((image, index) => (
                    <div
                      key={index}
                      className={`microneedle-carousel-slide ${index === currentMicroneedleImage ? 'active' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`GENOSYS Micro Needling kezelés ${index + 1}`}
                        className="microneedle-treatment-image"
                      />
                    </div>
                  ))}
                  
                  {/* Enhanced mobile overlay */}
                  <div className="microneedle-text-overlay mobile-overlay">
                    <h3 className="microneedle-overlay-title genosys-big">GENOSYS</h3>
                    <p className="microneedle-overlay-subtitle">Micro Needling</p>
                  </div>
                </div>
              </div>
              <div className="mobile-card-info">
                <h2 className="treatment-title">GENOSYS Micro Needling</h2>
                <h3 className="treatment-subtitle">Professzionális bőrmegújító kezelés</h3>
                <p className="treatment-description">
                  Mikrocsatornák létrehozása a transzdermális hatóanyagszállításért. 
                  Természetes kollagénindukció és sebgyógyulási folyamat.
                </p>
                <div className="treatment-benefits">
                  <ul>
                    <li>🔬 Természetes sebgyógyulás</li>
                    <li>💪 Bőrfeszesítő hatás</li>
                    <li>✨ Fehérítő és ránctalanító</li>
                    <li>🔄 Hegjavító tulajdonság</li>
                    <li>🌟 Striakezelés</li>
                    <li>💧 Pórusösszehúzás</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Ultrahang + Galván kezelés Section */}
      <AnimatedSection delay={0.4}>
        <section className="treatment-section ultrasound-treatment">
          <div className="treatment-container">
            <div className="treatment-content desktop-layout">
              <div className="treatment-info clickable-element">
                <h2 className="treatment-title">Ultrahang + Galván kezelés</h2>
                <h3 className="treatment-subtitle">Hatóanyag bevitel</h3>
                <p className="treatment-description">
                  Az ultrahang és galvánáram kombinációja segíti a hatóanyagok mély felszívódását, intenzív hidratálást és feszesebb, simább bőrt eredményez. Kíméletes, fájdalommentes kezelés a ragyogó, egészséges bőrért.
                </p>
                <div className="treatment-benefits">
                  <div className="benefits-grid">
                    <div className="benefit-item"><span className="benefit-icon">💦</span><div><strong>Intenzív hidratáltság</strong><p>Láthatóan hidratált, friss bőr</p></div></div>
                      <div className="benefit-item"><span className="benefit-icon">🟦</span><div><strong>Egyenletesebb bőrszín</strong><p>Szebb textúra, egységesebb tónus</p></div></div>
                    <div className="benefit-item"><span className="benefit-icon">🧴</span><div><strong>Feszesebb, simább bőr</strong><p>Azonnali feltöltődés és megújulás</p></div></div>
                    <div className="benefit-item"><span className="benefit-icon">✨</span><div><strong>Sugárzó egészség</strong><p>Friss, ragyogó megjelenés</p></div></div>
                    <div className="benefit-item"><span className="benefit-icon">🛡️</span><div><strong>Kíméletes, fájdalommentes</strong><p>Maximális kényelem, modern technológia</p></div></div>
                  </div>
                </div>
                  <div className="led-tech-specs">
                    <h4>Miért válaszd?</h4>
                    <ul>
                      <li><strong>Mély hatóanyagbevitel</strong> – a bőr mélyebb rétegeibe jutnak a vitaminok és ásványi anyagok</li>
                      <li><strong>Intenzív hidratálás</strong> – tartósan friss, hidratált bőr</li>
                      <li><strong>Feszesebb, simább bőr</strong> – azonnali feltöltődés és megújulás</li>
                      <li><strong>Kíméletes, fájdalommentes</strong> – maximális kényelem, modern technológia</li>
                    </ul>
                  </div>
              </div>
              <div className="treatment-visual clickable-element">
                <div className="led-image-grid desktop-only">
                  <div className="grid-top">
                    <div className="grid-image-small">
                      <img src={ultrasoundImages[0]} alt="Ultrahang kezelés 1" className="led-treatment-image" />
                    </div>
                    <div className="grid-image-small">
                      <img src={ultrasoundImages[1]} alt="Ultrahang kezelés 2" className="led-treatment-image" />
                    </div>
                  </div>
                  <div className="grid-bottom">
                    <div className="grid-image-large">
                      <img src={ultrasoundImages[2]} alt="Ultrahang kezelés 3" className="led-treatment-image" />
                      <div className="grid-overlay">
                        <h3 className="grid-title">Ultrahang + Galván</h3>
                        <p className="grid-subtitle">Hatóanyag bevitel</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="led-image-carousel mobile-only">
                  {ultrasoundImages.map((image, index) => (
                    <div key={index} className={`led-carousel-slide ${index === currentUltrasoundImage ? 'active' : ''}`}>
                      <img src={image} alt={`Ultrahang kezelés ${index + 1}`} className="led-treatment-image" />
                    </div>
                  ))}
                  <div className="led-text-overlay">
                    <h3 className="ultrasound-overlay-title">Ultrahang + Galván</h3>
                    <p className="led-overlay-subtitle">Placeholder alcím</p>
                  </div>
                  <div className="led-indicators">
                    {ultrasoundImages.map((_, index) => (
                      <button key={index} className={`led-indicator ${index === currentUltrasoundImage ? 'active' : ''}`} onClick={() => setCurrentUltrasoundImage(index)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Card Layout */}
            <div className="mobile-treatment-card">
              <div className="mobile-card-visual">
                <div className="led-image-carousel mobile-carousel">
                  {ultrasoundImages.map((image, index) => (
                    <div key={index} className={`led-carousel-slide ${index === currentUltrasoundImage ? 'active' : ''}`}>
                      <img src={image} alt={`Ultrahang kezelés ${index + 1}`} className="led-treatment-image" />
                    </div>
                  ))}
                  <div className="led-text-overlay mobile-overlay">
                    <h3 className="led-overlay-title">Ultrahang + Galván</h3>
                    <p className="led-overlay-subtitle">Placeholder alcím</p>
                  </div>
                </div>
              </div>
              <div className="mobile-card-info">
                <h2 className="treatment-title">Ultrahang + Galván kezelés</h2>
                <h3 className="treatment-subtitle">Hatóanyag bevitel</h3>
                <p className="treatment-description">
                  Az ultrahang és galvánáram kombinációja segíti a hatóanyagok mély felszívódását, intenzív hidratálást és feszesebb, simább bőrt eredményez. Kíméletes, fájdalommentes kezelés a ragyogó, egészséges bőrért.
                </p>
                <div className="treatment-benefits">
                  <ul>
                    <li>💦 Intenzív hidratáltság</li>
                    <li>🌈 Egyenletesebb bőrszín</li>
                    <li>🧴 Feszesebb, simább bőr</li>
                    <li>✨ Sugárzó egészség</li>
                    <li>🛡️ Kíméletes, fájdalommentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Gőzölés + Arctisztítás Section */}
      <AnimatedSection delay={0.6}>
        <section className="treatment-section steam-treatment">
          <div className="treatment-container">
            <div className="treatment-content desktop-layout">
              <div className="treatment-info clickable-element">
                <h2 className="treatment-title">Gőzölés</h2>
                <h3 className="treatment-subtitle">Arctisztítás</h3>
                <p className="treatment-description">
                  A meleg gőz megnyitja a pórusokat, puhítja a bőrt, így a tisztítás kíméletesen és hatékonyan történik. Az eredmény: tiszta, üde, friss bőr és egészséges ragyogás.
                </p>
                <div className="treatment-benefits">
                  <div className="benefits-grid">
                    <div className="benefit-item"><span className="benefit-icon">💨</span><div><strong>Pórusnyitás</strong><p>Hatékonyabb tisztítás</p></div></div>
                    <div className="benefit-item"><span className="benefit-icon">🧼</span><div><strong>Mélytisztítás</strong><p>Friss, tiszta bőr</p></div></div>
                    <div className="benefit-item"><span className="benefit-icon">🌱</span><div><strong>Frissesség</strong><p>Megújult arcbőr</p></div></div>
                  </div>
                </div>
                  <div className="led-tech-specs">
                    <h4>Miért válaszd?</h4>
                    <ul>
                      <li><strong>Pórusnyitás</strong> – hatékonyabb tisztítás, mélytisztítás</li>
                      <li><strong>Frissesség</strong> – megújult, ragyogó arcbőr</li>
                      <li><strong>Kíméletes, relaxáló</strong> – kellemes, pihentető kezelés</li>
                    </ul>
                  </div>
              </div>
              <div className="treatment-visual clickable-element">
                <div className="led-image-grid desktop-only">
                  <div className="grid-top">
                    <div className="grid-image-small">
                      <img src={steamImages[0]} alt="Gőzölés kezelés 1" className="led-treatment-image" />
                    </div>
                    <div className="grid-image-small">
                      <img src={steamImages[1]} alt="Gőzölés kezelés 2" className="led-treatment-image" />
                    </div>
                  </div>
                  <div className="grid-bottom">
                    <div className="grid-image-large">
                      <img src={steamImages[2]} alt="Gőzölés kezelés 3" className="led-treatment-image" />
                      <div className="grid-overlay">
                        <h3 className="grid-title">Gőzölés</h3>
                        <p className="grid-subtitle">Arctisztítás</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="led-image-carousel mobile-only">
                  {steamImages.map((image, index) => (
                    <div key={index} className={`led-carousel-slide ${index === currentSteamImage ? 'active' : ''}`}>
                      <img src={image} alt={`Gőzölés kezelés ${index + 1}`} className="led-treatment-image" />
                    </div>
                  ))}
                  <div className="led-text-overlay">
                    <h3 className="steam-overlay-title">Gőzölés + Arctisztítás</h3>
                    <p className="led-overlay-subtitle">Placeholder alcím</p>
                  </div>
                  <div className="led-indicators">
                    {steamImages.map((_, index) => (
                      <button key={index} className={`led-indicator ${index === currentSteamImage ? 'active' : ''}`} onClick={() => setCurrentSteamImage(index)} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Card Layout */}
            <div className="mobile-treatment-card">
              <div className="mobile-card-visual">
                <div className="led-image-carousel mobile-carousel">
                  {steamImages.map((image, index) => (
                    <div key={index} className={`led-carousel-slide ${index === currentSteamImage ? 'active' : ''}`}>
                      <img src={image} alt={`Gőzölés kezelés ${index + 1}`} className="led-treatment-image" />
                    </div>
                  ))}
                  <div className="led-text-overlay mobile-overlay">
                    <h3 className="led-overlay-title">Gőzölés + Arctisztítás</h3>
                    <p className="led-overlay-subtitle">Placeholder alcím</p>
                  </div>
                </div>
              </div>
              <div className="mobile-card-info">
                <h2 className="treatment-title">Gőzölés</h2>
                <h3 className="treatment-subtitle">Arctisztítás</h3>
                <p className="treatment-description">
                  A meleg gőz megnyitja a pórusokat, puhítja a bőrt, így a tisztítás kíméletesen és hatékonyan történik. Az eredmény: tiszta, üde, friss bőr és egészséges ragyogás.
                </p>
                <div className="treatment-benefits">
                  <ul>
                    <li>💨 Pórusnyitás</li>
                    <li>🧼 Mélytisztítás</li>
                    <li>🌱 Frissesség</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
      {/* Social/contact icons inline below treatments */}
      <div className="social-contact-inline">
        <span className="social-contact-label">És még sok más</span>
        <div className="social-contact-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="social-btn instagram" aria-label="Instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="social-btn facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
          </a>
          <a href="tel:+36201234567" className="social-btn phone" aria-label="Telefon">
            <i className="fas fa-phone" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home

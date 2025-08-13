import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const Home: React.FC = () => {
  const [currentLedImage, setCurrentLedImage] = useState(0)
  const [currentMicroneedleImage, setCurrentMicroneedleImage] = useState(0)
  const { scrollYProgress } = useScroll()
  
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="home">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="hero-section"
        style={{ y: backgroundY }}
      >
        <div className="hero-background">
          <video 
            className="hero-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/salon-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate="visible"
            >
              <motion.h1 variants={fadeInUp} className="hero-title">
                Healthy Skin Kozmetika
              </motion.h1>
              <motion.h2 variants={fadeInUp} className="hero-subtitle">
                Üdvözöljük az exkluzív szépségélmény világában
              </motion.h2>
              <motion.p variants={fadeInUp} className="hero-description">
                Fedezze fel prémium kozmetikai kezeléseink kínálatát, amelyeket a modern nő igényeire szabtunk
              </motion.p>
              <motion.div variants={fadeInUp} className="hero-buttons">
                <motion.a 
                  href="tel:+36306345853" 
                  className="btn btn-custom btn-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Foglaljon időpontot
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

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
                  <div className="grid-bottom">
                    <div className="grid-image-large">
                      <img 
                        src={ledImages[2]} 
                        alt="GENO-LED kezelés 3"
                        className="led-treatment-image"
                      />
                      <div className="grid-overlay">
                        <h3 className="grid-title">GENO-LED</h3>
                        <p className="grid-subtitle">Professzionális Fényterápia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile: eredeti carousel */}
                <div className="led-image-carousel mobile-only">
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
    </div>
  )
}

export default Home

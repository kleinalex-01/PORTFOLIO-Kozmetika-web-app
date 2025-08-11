import React, { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import salonLogo from '../assets/szalon-logo.jpg'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  const handleNavToggle = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setIsNavCollapsed(!isNavCollapsed)
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 350) // Match CSS transition duration
  }

  const handleLinkClick = () => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setIsNavCollapsed(true)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 350)
  }

  // Set initial height for transition
  useEffect(() => {
    if (navRef.current) {
      if (!isNavCollapsed) {
        navRef.current.style.height = navRef.current.scrollHeight + 'px'
      } else {
        navRef.current.style.height = '0px'
      }
    }
  }, [isNavCollapsed])

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar sticky-top">
      <div className="container">
        {/* Mobile Logo and Brand (visible only on mobile) */}
        <Link to="/" className="navbar-brand d-lg-none d-flex align-items-center" onClick={handleLinkClick}>
          <img src={salonLogo} alt="Salon Logo" className="navbar-logo me-2" />
          <span className="brand-name">Healthy Skin Kozmetika</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavToggle}
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div 
          ref={navRef}
          className={`navbar-collapse ${!isNavCollapsed ? 'show' : ''} ${isTransitioning ? 'collapsing' : 'collapse'}`} 
          id="navbarNav"
        >
          {/* Desktop Layout - All 5 items equally spaced */}
          <ul className="navbar-nav w-100 d-none d-lg-flex justify-content-between align-items-center">
            <li className="nav-item">
              <Link className={isActive('/szolgaltatasok')} to="/szolgaltatasok">Szolgáltatások</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/arak')} to="/arak">Árak</Link>
            </li>
            
            {/* Center Logo and Brand (desktop only) */}
            <li className="nav-item navbar-brand-desktop">
              <Link to="/" className="d-flex align-items-center text-decoration-none">
                <img src={salonLogo} alt="Salon Logo" className="navbar-logo me-2" />
                <span className="brand-name">Healthy Skin Kozmetika</span>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className={isActive('/galeria')} to="/galeria">Termékek</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/kapcsolat')} to="/kapcsolat">Kapcsolat</Link>
            </li>
          </ul>
          
          {/* Mobile Layout - Simple vertical menu */}
          <ul className="navbar-nav d-lg-none">
            <li className="nav-item">
              <Link className={isActive('/szolgaltatasok')} to="/szolgaltatasok" onClick={handleLinkClick}>Szolgáltatások</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/arak')} to="/arak" onClick={handleLinkClick}>Árak</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/galeria')} to="/galeria" onClick={handleLinkClick}>Termékek</Link>
            </li>
            <li className="nav-item">
              <Link className={isActive('/kapcsolat')} to="/kapcsolat" onClick={handleLinkClick}>Kapcsolat</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

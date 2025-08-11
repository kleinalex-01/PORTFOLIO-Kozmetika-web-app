import React, { useState, useCallback } from 'react'

const Arak: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const priceListImages = [
    { src: '/szalon-arlista1.jpg', alt: 'Árlista - 1. oldal' },
    { src: '/szalon-arlista2.jpg', alt: 'Árlista - 2. oldal' },
    { src: '/szalon-arlista3.jpg', alt: 'Árlista - 3. oldal' },
    { src: '/szalon-arlista4.jpg', alt: 'Árlista - 4. oldal' }
  ]

  const openModal = (index: number) => {
    setSelectedImageIndex(index)
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null)
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }, [])

  const nextImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % priceListImages.length)
      setZoomLevel(1)
      setPanPosition({ x: 0, y: 0 })
    }
  }, [selectedImageIndex, priceListImages.length])

  const prevImage = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + priceListImages.length) % priceListImages.length)
      setZoomLevel(1)
      setPanPosition({ x: 0, y: 0 })
    }
  }, [selectedImageIndex, priceListImages.length])

  const zoomIn = useCallback(() => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3))
  }, [])

  const zoomOut = useCallback(() => {
    setZoomLevel(prev => Math.max(prev - 0.5, 0.5))
    if (zoomLevel <= 1) {
      setPanPosition({ x: 0, y: 0 })
    }
  }, [zoomLevel])

  const resetZoom = useCallback(() => {
    setZoomLevel(1)
    setPanPosition({ x: 0, y: 0 })
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - panPosition.x, y: e.clientY - panPosition.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoomLevel > 1) {
      setPanPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Add keyboard event listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        switch (e.key) {
          case 'ArrowRight':
            nextImage()
            break
          case 'ArrowLeft':
            prevImage()
            break
          case 'Escape':
            closeModal()
            break
          case '+':
          case '=':
            zoomIn()
            break
          case '-':
            zoomOut()
            break
          case '0':
            resetZoom()
            break
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedImageIndex, nextImage, prevImage, closeModal, zoomIn, zoomOut, resetZoom])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="page-section">
            <h2>Áraink</h2>
            <p>Átlátható és fair árazás minden szolgáltatásunkra</p>
            
            {/* Price List Images */}
            <div className="price-list-gallery mt-4">
              <div className="row">
                {priceListImages.map((image, index) => (
                  <div key={index} className="col-lg-6 col-md-12 mb-4">
                    <div className="price-image-card" onClick={() => openModal(index)}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="img-fluid rounded shadow-sm"
                      />
                      <div className="image-overlay">
                        <div className="overlay-icon">🔍</div>
                        <p>Kattintson a nagyításhoz</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="row mt-5">
              <div className="col-12">
                <div className="price-contact-info text-center">
                  <h4>Időpontfoglalás és további információ</h4>
                  <p className="text-muted">
                    Részletes konzultációért és időpontfoglalásért keresse fel kapcsolat oldalunkat.
                  </p>
                  <a href="/kapcsolat" className="btn btn-custom btn-lg mt-3">
                    Kapcsolatfelvétel
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-controls">
                <button className="control-btn" onClick={zoomOut} disabled={zoomLevel <= 0.5}>
                  🔍-
                </button>
                <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                <button className="control-btn" onClick={zoomIn} disabled={zoomLevel >= 3}>
                  🔍+
                </button>
                <button className="control-btn" onClick={resetZoom}>
                  ↻
                </button>
              </div>
              <button className="close-btn" onClick={closeModal}>
                ✕
              </button>
            </div>

            {/* Image Container */}
            <div className="image-container">
              <button className="nav-btn prev-btn" onClick={prevImage}>
                ‹
              </button>
              
              <div 
                className="image-wrapper"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                style={{ cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
              >
                <img
                  src={priceListImages[selectedImageIndex].src}
                  alt={priceListImages[selectedImageIndex].alt}
                  style={{
                    transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                    transition: isDragging ? 'none' : 'transform 0.2s ease'
                  }}
                  draggable={false}
                />
              </div>

              <button className="nav-btn next-btn" onClick={nextImage}>
                ›
              </button>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <span className="image-counter">
                {selectedImageIndex + 1} / {priceListImages.length}
              </span>
              <div className="modal-help">
                <small>← → nyilak: navigálás | +/- : zoom | Esc: bezárás</small>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Arak

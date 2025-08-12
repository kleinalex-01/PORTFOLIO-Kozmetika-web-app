import React, { useState, useRef, useEffect } from 'react'

interface Product {
  id: string
  productName: string
  hungarianName: string
  image: string
  brand: string
}

interface ProductData {
  products: Product[]
}

const Termekek: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loading, setLoading] = useState(true)

  // Load products from JSON file
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/termekek/termek-info.json')
        const data: ProductData = await response.json()
        setProducts(data.products)
        setLoading(false)
      } catch (error) {
        console.error('Error loading products:', error)
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const nextSlide = () => {
    setCurrentSlide(prev => prev >= products.length - 1 ? 0 : prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev <= 0 ? products.length - 1 : prev - 1)
  }

  // Touch/swipe functionality
  const handleTouchStart = useRef<number>(0)
  const handleTouchEnd = useRef<number>(0)

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!handleTouchStart.current || !handleTouchEnd.current) return
    
    const distance = handleTouchStart.current - handleTouchEnd.current
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  if (loading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="page-section">
              <div className="text-center">
                <h1>Termékeink</h1>
                <p>Termékek betöltése...</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="page-section">
            <div className="products-header text-center mb-5">
              <h1>Termékeink</h1>
              <p className="products-intro">
                Fedezze fel gondosan válogatott Genosys kozmetikai termékeink kínálatát! 
                Minden termék kiváló minőségű, hatékony és biztonságos használatra.
              </p>
            </div>

            <div className="product-carousel-container">
              <div 
                className="product-carousel"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                {/* Navigation Arrows */}
                <button 
                  className="carousel-btn carousel-btn-prev"
                  onClick={prevSlide}
                  aria-label="Előző termék"
                >
                  ‹
                </button>
                
                <button 
                  className="carousel-btn carousel-btn-next"
                  onClick={nextSlide}
                  aria-label="Következő termék"
                >
                  ›
                </button>

                {/* Product Cards */}
                <div className="carousel-track">
                  {products.map((product, index) => (
                    <div 
                      key={product.id}
                      className={`product-slide ${index === currentSlide ? 'active' : ''}`}
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                      }}
                    >
                      <div className="product-card">
                        <div className="product-image-container">
                          <img 
                            src={product.image} 
                            alt={product.hungarianName}
                            className="product-image"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdlbm9zeXM8L3RleHQ+PC9zdmc+'
                            }}
                          />
                          <div className="product-overlay">
                            {product.brand === 'genosys' ? (
                              <img 
                                src="/termekek/genosysproffecional_logo_w_cut.png"
                                alt="Genosys Professional"
                                className="brand-logo"
                              />
                            ) : (
                              <span className="product-brand">{product.brand}</span>
                            )}
                          </div>
                        </div>
                        <div className="product-info">
                          <h4 className="product-name">{product.hungarianName}</h4>
                          <p className="product-description">{product.productName}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* General contact section */}
            <div className="products-footer text-center mt-5 pt-4">
              <div className="products-contact-info">
                <h3>Kérdése van termékeinkkel kapcsolatban?</h3>
                <p>Szakértő csapatunk segít kiválasztani az Önnek legmegfelelőbb termékeket!</p>
                <div className="contact-buttons">
                  <a href="tel:+36306345853" className="btn btn-custom btn-lg me-3">
                    📞 Hívjon most
                  </a>
                  <a href="/kapcsolat" className="btn btn-outline-custom btn-lg">
                    Üzenet küldése
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Termekek

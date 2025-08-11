import React from 'react'

const Galeria: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="page-section">
            <h2>Termékek</h2>
            <p>Prémium kozmetikai termékek a tökéletes bőrápoláshoz</p>
            
            <div className="row mt-4">
              <div className="col-md-4 mb-4">
                <div className="product-card">
                  <div className="product-placeholder">
                    <h5>Arcápoló krémek</h5>
                    <p>Hidratáló és tápláló krémek minden bőrtípusra</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card">
                  <div className="product-placeholder">
                    <h5>Szérumok</h5>
                    <p>Koncentrált hatóanyagú anti-aging szérumok</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card">
                  <div className="product-placeholder">
                    <h5>Tisztító termékek</h5>
                    <p>Gyengéd tisztítás és mélytisztítás termékei</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card">
                  <div className="product-placeholder">
                    <h5>Maszkok</h5>
                    <p>Intenzív ápoló és regeneráló maszkok</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card">
                  <div className="product-placeholder">
                    <h5>Testápolók</h5>
                    <p>Luxus testápoló krémek és olajok</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card">
                  <div className="product-placeholder">
                    <h5>Napsugárzás elleni védelem</h5>
                    <p>Magas faktorszámú napvédő termékek</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row mt-5">
              <div className="col-12 text-center">
                <div className="product-info">
                  <h4>Személyre szabott tanácsadás</h4>
                  <p>Szakértő kozmetikusunk segít kiválasztani a bőrtípusának legmegfelelőbb termékeket</p>
                  <a href="/kapcsolat" className="btn btn-custom btn-lg">
                    Kérjen tanácsadást
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

export default Galeria

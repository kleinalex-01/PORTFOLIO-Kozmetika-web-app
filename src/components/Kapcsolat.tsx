import React, { useState } from 'react'

const Kapcsolat: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Üzenet a Healthy Skin Kozmetika weboldalról')
      const body = encodeURIComponent(
        `Név: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Üzenet:\n${formData.message}`
      )
      const mailtoLink = `mailto:soroslilla20@gmail.com?subject=${subject}&body=${body}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' })
      setSubmitMessage('Az email kliens megnyílt az üzenettel. Köszönjük!')
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitMessage('Hiba történt. Kérjük, próbálja újra vagy hívjon minket.')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <section className="page-section">
            <h2>Kapcsolat</h2>
            <p>Lépjen kapcsolatba velünk időpontfoglalásért</p>
            
            <div className="row mt-4">
              <div className="col-md-6 mb-4">
                <div className="contact-info">
                  <h4>Elérhetőségeink</h4>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <strong>Telefon:</strong> <a href="tel:+36306345853">06 30 634 58 53</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <strong>Email:</strong> <a href="mailto:soroslilla20@gmail.com">soroslilla20@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <strong>Cím:</strong> 8237 Tihany, Aranyház u. 18
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="contact-form">
                  <h4>Üzenet küldése</h4>
                  {submitMessage && (
                    <div className={`alert ${submitMessage.includes('Hiba') ? 'alert-danger' : 'alert-success'} mb-3`}>
                      {submitMessage}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Név" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea 
                        className="form-control" 
                        rows={4} 
                        placeholder="Üzenet"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-custom"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Küldés...' : 'Küldés'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Kapcsolat

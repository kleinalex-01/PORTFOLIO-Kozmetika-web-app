import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FloatingActionButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="floating-action-button"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 2 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a href="tel:+36306345853" className="fab-link">
        <motion.div 
          className="fab-icon"
          animate={{ rotate: isHovered ? 15 : 0 }}
          transition={{ duration: 0.2 }}
        >
          📞
        </motion.div>
        
        <motion.div 
          className="fab-tooltip"
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 20 
          }}
          transition={{ duration: 0.2 }}
        >
          Hívjon most!
        </motion.div>
      </a>
      
      {/* Ripple effect on click */}
      <motion.div 
        className="fab-ripple"
        initial={{ scale: 0, opacity: 0.5 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  )
}

export default FloatingActionButton

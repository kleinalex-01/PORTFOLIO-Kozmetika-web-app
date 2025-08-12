import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div 
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="salon-logo">Healthy Skin</h1>
          <p className="salon-tagline">Kozmetika</p>
        </motion.div>
        
        <motion.div 
          className="loading-bar-container"
          initial={{ width: 0 }}
          animate={{ width: "300px" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="loading-bar">
            <motion.div 
              className="loading-fill"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <span className="loading-percentage">{progress}%</span>
        </motion.div>
        
        <motion.p 
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Üdvözöljük az exkluzív szépségélmény világában...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

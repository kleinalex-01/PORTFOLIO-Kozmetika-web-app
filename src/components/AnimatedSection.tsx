import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px' // Trigger animation earlier for better UX
  })

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const variants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 50,
      scale: prefersReducedMotion ? 1 : 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : delay
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection

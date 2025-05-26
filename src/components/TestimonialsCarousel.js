import React, { useState, useEffect } from 'react'
import styles from './TestimonialsCarousel.module.css'

const testimonials = [
  {
    quote:
      'The NOMAD system has improved our NMR submission process, making it more efficient and user-friendly, with the ability to now monitor the queue remotely from other computers within the building. As part of a larger research group, we’ve also found NOMAD has simplified the process of locating and processing our NMR data',
    author: 'Dr. Ed Walter, Imperial College London'
  },
  {
    quote:
      'The main thing I appreciate is the potential for vastly improved data storage and accessibility. As well as the real time tracking of sample status.',
    author: 'Dr. Gavin Smith, Imperial College London'
  },
  {
    quote:
      'My opinion is that NOMAD will make a massive difference to the way we can access, review and monitor the generation of this crucial data. ',
    author: 'Prof. James Bull, Imperial College London'
  }
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  const prevTestimonial = () => {
    setIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const nextTestimonial = () => {
    setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 15000) // 15000ms = 15 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <h1>Testimonials</h1>
      <div className={styles.testimonialsCarousel}>
        <blockquote>
          <p>"{testimonials[index].quote}"</p>
          <footer>- {testimonials[index].author}</footer>
        </blockquote>
        <div className={styles.carouselButtons}>
          <button onClick={prevTestimonial} aria-label='Previous testimonial'>
            ‹
          </button>
          <button onClick={nextTestimonial} aria-label='Next testimonial'>
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

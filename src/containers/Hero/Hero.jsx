import React from 'react'
import { motion } from 'framer-motion'
import profile from '../../assets/profile.png';
import './Hero.scss'

const Hero = () => {
  return (
    <section id='home' className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="hero__img"
          >
            <img src={profile} alt="profile_image" />
          </motion.div>
          <motion.div 
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="hero__info"
          >
            <h1 className="hero__title">Web Developer</h1>
            <p className="hero__subtitle">I am fullstack, UI/UX Web developer blablabl balba balbala balbal</p>
            <span className="hero__button">
              Contact with me
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
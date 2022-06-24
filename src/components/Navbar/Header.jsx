import React from 'react';
import { motion, useViewportScroll, useTransform, useCycle } from 'framer-motion';
import './Header.scss';
import Hamburger from './Hamburger.jsx';

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const sectionMove = useTransform(scrollYProgress, [0, 0.2], ['15vh', '8vh']);
  const [isOpen, toggleOpen] = useCycle(false, true);

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2],
    ['0px 7px 20px 0px rgba(68, 68, 68, 0)', '0px 7px 20px 0px rgba(68, 68, 68, 0.3) '],
  );

  const easing = [0.6, -0.05, 0.01, 0.99];

  const sidebar = {
    open: {
      x: '-100vw',
      transition: { duration: 0.6, ease: easing },
    },
    closed: {
      x: 0,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  console.log(isOpen)

  return (
    <motion.header
      className="header"
      style={{ height: sectionMove, boxShadow }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <div className='container header-container'>
        <a href='#home' className='header__logo'>
          {/* <Logo /> */}
          Yosifov
        </a>
        <nav className="header__navbar">
          <ul className="header__list">
            {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li className="header__element" key={`link-${item}`}>
                  <a href={`#${item}`} onClick={toggleOpen}>
                    {item}
                  </a>
                </li>
            ))}
          </ul>
        </nav>
        <Hamburger toggle={() => toggleOpen()} />
        <motion.nav className="header__navbar-mobile" variants={sidebar}>
          <ul>
            {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={toggleOpen} onKeyUp={toggleOpen}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
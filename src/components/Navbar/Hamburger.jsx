import React from 'react';
import HamburgerPath from './HamburgerPath';
import './Hamburger.scss';

const Hamburger = ({ toggle }) => (
  <button type="button" className="hamburger" onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <HamburgerPath
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <HamburgerPath
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <HamburgerPath
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);
export default Hamburger;
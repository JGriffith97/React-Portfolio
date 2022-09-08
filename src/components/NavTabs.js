import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className = "nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
          Projects
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
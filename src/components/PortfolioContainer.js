import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    // Parent div to react elements.
    <div>
      <header>
        <div className='header-div'>
          <h1 className='header-main'>Jayden Griffith's Portfolio</h1>
        </div>
        {/* I could actually add this to the NavTabs component. I'll decide which I'm
        more comfortable with. */}
        <div className='nav-div'>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      {renderPage()}
    </div>
  );
};

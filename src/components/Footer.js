import React from 'react';
import LinkedIn from '../images/LI-In-Bug.png'
import GitHub from '../images/GitHub_Logo_White.png'

function Footer() {
  return (
    <footer>
      <div className="footer-refs-1">
        <a href="https://github.com/JGriffith97" rel="noreferrer" target="_blank">
          <img className="git" src={GitHub} alt="Link to my GitHub" />
        </a>
      </div>
      <div className="footer-refs-2">
        <a href="https://www.linkedin.com/in/jayden-griffith-a3b7b9217/" rel="noreferrer" target="_blank">
          <img className="in" src={LinkedIn} alt="Link to my LinkedIn" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
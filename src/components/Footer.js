import React from 'react';
import LinkedIn from '../images/LI-In-Bug.png'
import GitHub from '../images/GitHub_Logo_White.png'
import StackOverflow from '../images/stackoverflow-ico.webp'

function Footer() {
  return (
    <footer>
      <div className="footer-refs">
        <a href="https://stackoverflow.com/users/18731169/" rel="noreferrer" target="_blank">
          <img className="stack" src={StackOverflow} alt="Link to my StackOverflow" />
        </a>
      </div>
      <div className="footer-refs">
        <a href="https://github.com/JGriffith97" rel="noreferrer" target="_blank">
          <img className="git" src={GitHub} alt="Link to my GitHub" />
        </a>
      </div>
      <div className="footer-refs">
        <a href="https://www.linkedin.com/in/jayden-griffith-a3b7b9217/" rel="noreferrer" target="_blank">
          <img className="in" src={LinkedIn} alt="Link to my LinkedIn" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
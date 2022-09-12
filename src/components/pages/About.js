import React from 'react';
import Me from '../../images/me.jpg'

export default function About() {
  return (
    // Can add some different css styles if need be.
    <div className='main-div'>
      <div className='main-header-div'>
        <h2>
          About Me
        </h2>
        <img className='me-img' src={Me} alt='Myself, Jayden Griffith'></img>
        <p className='main-paragraph'>
          Hello, my name is Jayden Griffith, currently a student of the University of Utah's Coding Bootcamp. Which began in April, 2022.

          I love basketball, hockey, gaming, and I'm becoming quite passionate about coding as well!
        </p>
      </div>
    </div>
  )
}
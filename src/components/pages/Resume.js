import React from 'react';
import jgResume from '../../documents/JG-Resume.pdf'

// NOTES-TODOs
// Kinda a tricky one, will require a downloadable resume file.
// As per the README -- 
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

export default function Resume() {
  return (
    <div className='resume-div'>
      <div className='resume-header-div'>
        <h2 className='resume-header'>
          Resume
        </h2>
      </div>
      <div className='resume-container'>
        {/* Should probably note that I haven't updated my resume yet. */}
        <iframe className='resume-iframe' title="My Resume" src={jgResume}></iframe>
      </div>
      <div className='proficiencies'>
        <h3>Proficient Languages</h3>
        <ul className='proficiency-list'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>mySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  )
}
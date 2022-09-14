import React from 'react';

// NOTES-TODOs
// This will need to be a submitted form
// reference the Readme's mock-up.
// MAKE EVENT LISTENER to handle from submit, send email.

export default function Contact() {
  return (
    <div className='contact-div'>
      <div className='main-header-div'>
        <h2>
          Contact
        </h2>
      </div>
      <form className='send-message-form'>
        <div className='input-field'>
          <p className='label'><label>Name:</label></p>
          <input className='title-input' type='text' id='name' name='name' placeholder='Your name?' required></input>
        </div>
        <div className='input-field'>
          <p className='label'><label>Email:</label></p>
          <input className='title-input' type='email' id='email' name='email' placeholder='YourNameHere@email.com' required></input>
        </div>
        <div className='input-field'>
          <p className='label'><label>Message:</label></p>
          <textarea className='message-input' id='message' name='message' placeholder='Your message here.' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}
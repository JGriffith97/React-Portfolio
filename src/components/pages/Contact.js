import React from 'react';

// NOTES-TODOs
// This will need to be a submitted form
// reference the Readme's mock-up.
// MAKE EVENT LISTENER to handle from submit, send email.
// onmouseout event for the readme's warning if no text is in the input field?

// As per minimum viable, I'm going to have every feature here working, however, 
// I won't be making this send an email, as it seems that would require some further
// research and development.


export default function Contact() {

  function noInputText(event) {
    if (event.target.value === '') {
      event.target.placeholder = 'Entry required in this field!'
    }
    return
  }

  return (
    <div className='contact-div'>
      <div className='contact-header-div'>
        <h2>
          Contact
        </h2>
      </div>
      <form className='send-message-form'>
        <div className='input-field'>
          <p className='label'><label>Name:</label></p>
          <input className='title-input' type='text' id='name' name='name' onMouseLeave={noInputText} placeholder='Your name?' required></input>
        </div>
        <div className='input-field'>
          <p className='label'><label>Email:</label></p>
          <input className='title-input' type='email' id='email' name='email' onMouseLeave={noInputText} placeholder='YourNameHere@email.com' required></input>
        </div>
        <div className='input-field'>
          <p className='label'><label>Message:</label></p>
          <textarea className='message-input' id='message' name='message' onMouseLeave={noInputText} placeholder='Your message here.' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
        {/* Doesn't presently send. */}
      </form>
    </div>
  )
}
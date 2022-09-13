import React from 'react';
import MovieClub from '../../images/MovieClub.jpg'
import TechBlog from '../../images/TechBlog.png'
import SocialNetworkAPI from '../../images/SocialNetworkAPI.png'
import EmployeeTracker from '../../images/EmployeeTracker.png'

// NOTES-TODOs
// Similar to what we did on the original portfolio, images linking to the
// deployed application and/or the associated repository

export default function Portfolio() {
  return (
    <div className='portfolio-div'>
      <div className='main-header-div'>
        <h2>
          Portfolio
        </h2>
      </div>
      <section className='portfolio-container'>
        <div className='project-row'>
          <div className='project-container'>
            <div className='project-left'>
              <img className='project-img' src={MovieClub} alt='Movie Club Project'/>
              <div className='project-link-top'><a className="project-anchor" href="https://movieclub3.herokuapp.com/" rel="noreferrer" target="_blank">View Deployed App</a></div>
              <div className='project-link-bottom'><a className="project-anchor" href="https://github.com/Firm-Tofu10/MovieClub" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              This is a movie review project undertaken by Kate Patch, Bryson Benson and myself. It was created utilizing Express.js/Express-Handlebars/Express-Sessions, mySQL/Sequelize/mySQL2/Connect-Session-Sequelize, and bCrypt. As part of Project 2 of the UofU's Coding Bootcamp.
            </div>
          </div>
          <div className='project-container'>
            <div className='project-right'>
              <img className ='project-img' src={TechBlog} alt='Tech Blog Project'/>
              <div className='project-link-top'><a className="project-anchor" href="https://tech-blog-797.herokuapp.com/" rel="noreferrer" target="_blank">View Deployed App</a></div>
              <div className='project-link-bottom'><a className="project-anchor" href="https://github.com/JGriffith97/Tech-Blog" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              This is a full-stack application serving as a tech blog. It was created using Node.js, mySQL/Sequelize, Express/Express-Sessions/Express-Handlebars; and utilizing Model-View-Controller(MVC) framework. As part of Module 14 of the UofU's Coding Bootcamp.
            </div>
          </div>
        </div>
        <div className='project-row'>
          <div className='project-container'>
            <div className='project-left'>
              <img className='project-img' src={SocialNetworkAPI} alt='Social Network API Project'/>
              <div className='project-link-center'><a className="project-anchor" href="https://github.com/JGriffith97/Social-Network-API" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              This is a social network backend API built utilizing Express.js, MongoDB, Mongoose, and NodeJS. As part of Module 18 of the UofU's Coding Bootcamp.
            </div>
          </div>
          <div className='project-container'>
            <div className='project-right'>
              <img className='project-img' src={EmployeeTracker} alt='Employee Tracker Project'/>
              <div className='project-link-center'><a className="project-anchor" href="https://github.com/JGriffith97/Employee-Tracker" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              This is an employee tracker, designed to track individual employees, their roles, departments, and salary. This application was made with NodeJS, mySQL, and with the console.table, dotenv, inquirer, and mysql2 NPM modules. As part of the Module 12 Challenge of the UofU's Coding Bootcamp.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
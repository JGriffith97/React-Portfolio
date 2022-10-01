import React from 'react';
import MovieClub from '../../images/MovieClub.jpg'
import TechBlog from '../../images/TechBlog.png'
import SocialNetworkAPI from '../../images/SocialNetworkAPI.png'
import EmployeeTracker from '../../images/EmployeeTracker.png'
import WeatherDashboard from '../../images/WeatherDashboard.jpg'
import DailyPlanner from '../../images/DailyPlanner.png'
import CampaignTracker from '../../images/Campaign-Tracker.jpeg'

// NOTES-TODOs
// Similar to what we did on the original portfolio, images linking to the
// deployed application and/or the associated repository
// Will need SIX. Need to add two more.

export default function Portfolio() {
  return (
    <div className='portfolio-div'>
      <div className='portfolio-header-div'>
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
              <h3 className='project-title'>Movie Club</h3>
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
              <h3 className='project-title'>Tech Blog</h3>
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
              <h3 className='project-title'>Social Network API</h3>
              This is a social network backend API built utilizing Express.js, MongoDB, Mongoose, and NodeJS. As part of Module 18 of the UofU's Coding Bootcamp.
            </div>
          </div>
          <div className='project-container'>
            <div className='project-right'>
              <img className='project-img' src={EmployeeTracker} alt='Employee Tracker Project'/>
              <div className='project-link-center'><a className="project-anchor" href="https://github.com/JGriffith97/Employee-Tracker" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              <h3 className='project-title'>Employee Tracker</h3>
              This is an employee tracker, designed to track individual employees, their roles, departments, and salary. This application was made with NodeJS, mySQL, and with the console.table, dotenv, inquirer, and mysql2 NPM modules. As part of the Module 12 Challenge of the UofU's Coding Bootcamp.
            </div>
          </div>
        </div>
        <div className='project-row'>
          <div className='project-container'>
            <div className='project-left'>
              <img className='project-img' src={WeatherDashboard} alt='Weather Dashboard Project'/>
              <div className='project-link-top'><a className="project-anchor" href="https://jgriffith97.github.io/Weather-Dashboard/" rel="noreferrer" target="_blank">View Deployed App</a></div>
              <div className='project-link-bottom'><a className="project-anchor" href="https://github.com/JGriffith97/Weather-Dashboard" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              <h3 className='project-title'>Weather Dashboard</h3>
              This is a weather app utilizing the OpenWeatherMap API to make multiple fetch calls to display information to the DOM. This was completed using HTML, JavaScript, jQuery, Moment.js, and Bootstrap.
            </div>
          </div>
          <div className='project-container bottom'>
            <div className='project-left'>
              <img className='project-img' src={DailyPlanner} alt='Daily Planner API Project'/>
              <div className='project-link-top'><a className="project-anchor" href="https://jgriffith97.github.io/Daily-Planner/" rel="noreferrer" target="_blank">View Deployed App</a></div>
              <div className='project-link-bottom'><a className="project-anchor" href="https://github.com/JGriffith97/Daily-Planner" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              <h3 className='project-title'>Daily Planner</h3>
              This is a functional daily planner for hour to hour scheduling, created by utilizing HTML, CSS, JavaScript, jQuery, Moment.js, and Bootstrap.
            </div>
          </div>
        </div>
        <div className='project-row'>
          <div className='project-container-fill'>
            <div className='project-single'>
              <img className='project-img' src={CampaignTracker} alt='Campaign Tracker Project'/>
              <div className='project-link-top'><a className="project-anchor" href="https://desolate-crag-84846.herokuapp.com/" rel="noreferrer" target="_blank">View Deployed App</a></div>
              <div className='project-link-bottom'><a className="project-anchor" href="https://github.com/tperschon/campaigntracker" rel="noreferrer" target="_blank">View On GitHub</a></div>
            </div>
            <div className='project-explanation'>
              <h3 className='project-title'>Campaign Tracker</h3>
              This is a group-made Dungeons And Dragons (DnD) companion app built to assist both the Dungeon Master (DM) and their players take and share notes associated with their present campaigns. 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
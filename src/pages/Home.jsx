import React from 'react'
import { NavLink } from 'react-router-dom';

import "../App.css";

export const Home = () => {
  return (
    <>
    <main>
      <div className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="section-hero--content">
            <p className="hero-subheading">
              Explore the Latest in Movie Industries
            </p>
            <h1 className="hero-heading">
              Unlimited Movie, TVs Shows, & More.
            </h1>
            <p className="hero-para">
              Discover the Top Best Movies and Dramas with a catchy subtitle
              like Your Ultimate Guide to Must-Watch Content.
            </p>
            <div className="hero-btn">
              <NavLink to="/movie" className="btn">
                Explore Now
              </NavLink>
            </div>
          </div>
          <div className="section-hero-image">
            <img 
            src="./movieimg.jpg" 
            alt="movies poster" 
            width="150"  
            height="150"
            />
          </div>

          
        </div>
        
      </div>
    </main>
        <div class="custom-shape-divider-bottom-1760627935">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
    </>
  );
};

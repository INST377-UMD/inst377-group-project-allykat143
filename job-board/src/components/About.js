import React from 'react';
import trotzImage from './KTrotz.JPG';
import clipperImage from './AClipper.jpg'
import umdImage from './UMD_IMG.png';
import medinaImage from './Michelle_Headshot.JPG'

const About = () => {
  return (
    <div>
      <h2 id='aboutUs'>About Us</h2>
      <p id = "header-text">Our team is dedicated to providing minorities with the necessary resources and tools to accomplish their career goals .</p>
      <div class = "img-container">
        <div class = "img-item">
          <img src={trotzImage} alt="KTrotz"/>
          <h2><u>Kamari Trotz</u></h2>
          <p id="about_text">A senior Information Science Major looking to pursue a career in Data Science/Analytics.</p>
        </div>
        <div class = "img-item">
          <img src={clipperImage} alt="AClipper" />
          <h2><u>Allyson Clipper</u></h2>
          <p id="about_text">A senior Information Science Major looking to pursue a career in Software Development.</p>
        </div>
        <div class = "img-item">
          <img src={medinaImage} alt="MMedina"/>
          <h2><u>Michelle Medina</u></h2>
          <p id="about_text">A Senior Information Science major looking to pursue a career in Tech Consulting.</p>
        </div>
        </div>
    </div>
  );
};

export default About;
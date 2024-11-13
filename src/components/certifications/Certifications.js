import React from 'react';
import './Certifications.css';
import webathonImage from '../images/webathon.jpg';
import tfsimplyimg from '../images/tfsimplify.jpg';
import webalchemyimg from '../images/webalchemy.jpg';
import tataimg from "../images/tatacrucible.jpg"
import ai from "../images/AI.jpg"

function Certifications() {
  const img = [
    {
      "immg": webathonImage,
      "nameofskill": "participated in Webathon 2.0, a 24-hour hackathon where I gained valuable skills and connected with others. This experience inspired me to pursue further learning and growth in the field.",
    },
    {
      "immg": tfsimplyimg,
      "nameofskill": "I participated in TensorFlow Simplify, an event hosted by GDG at our college, where I learned machine learning fundamentals and gained hands-on experience on Kaggle. This experience deepened my interest in machine learning and motivated me to continue exploring the field."
    },
    {
      "immg": webalchemyimg,
      "nameofskill": "This is my first web designing event, I advanced to the second round after successfully developing two web pages within the given time. This competitive experience was thrilling and a great opportunity to apply my skills under time constraints."
    },
    {
      "immg":tataimg,
      "nameofskill":"I participated in the Tata Crucible Quiz, an engaging and informative competition hosted by the Tata Group, where I had the opportunity to test my knowledge and gain valuable insights."
    },
    {
      "immg":ai,
      "nameofskill":"I completed the 'Getting Started with AI module conducted by IBM, where I learned the fundamentals of Artificial Intelligence and earned a badge upon successful completion."
    }
  ];

  return (
    <div className="certifications-container">
      <h3 className='headingofcerti'>My Certifications & Achievements</h3>
      <div className="row">
        {img.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div className="certicard card h-100 w-100 ">
              <img src={item.immg} alt={item.nameofskill} className="imm card-img w-75 h-100 mt-3" />
              <div className="card-body">
                <h4>{item.nameofskill}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;

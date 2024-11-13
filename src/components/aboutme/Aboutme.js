import React from 'react';
import './Aboutme.css';

function Aboutme() {
    const ps = [
      {
        "imgg":"https://img.icons8.com/color/96/000000/html-5.png",
        "nameofskill":"Html",
  
      },
      {
        "imgg":"https://img.icons8.com/color/96/000000/css3.png",
        "nameofskill":"Css",
  
      },
      {
        "imgg":"https://tse1.mm.bing.net/th?id=OIP.KTq5K5E3QeLVrm71FR0w8gHaHa&pid=Api&P=0&h=180",
        "nameofskill":"Bootstrap",
  
      },
      {
        "imgg":"https://img.icons8.com/color/96/000000/javascript.png",
        "nameofskill":"Javascript",
  
      },
      {
        "imgg":"https://img.icons8.com/color/96/000000/nodejs.png",
        "nameofskill":"Node.js",
  
      },
      {
        "imgg":"https://img.icons8.com/plasticine/96/000000/react.png",
        "nameofskill":"React.Js",
  
      },
      
    ]

      const programmingskills=
      [
        {
          "imgg1":"https://img.icons8.com/color/96/000000/c-programming.png",
          "skill":"C",
    
        },
        {
          "imgg1":"https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
          "skill":"C++",
    
        },
        {
          "imgg1":"https://img.icons8.com/color/96/000000/python.png",
          "skill":"Python",
    
        },
        {
          "imgg1":"https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png",
          "skill":"Java",
    
        },
        {
          "imgg1":"https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-algorithms-data-analytics-flaticons-flat-flat-icons.png",
          "skill":"Data Structures",
    
        },
      ]
    
    


    return (
      <div>
        <h1 className='topheading'>Let's Take a Peek into My Path and My Projects</h1>
        <p className='about'>
          I am a third-year B.Tech student in Information Technology at VNRVJIET. My passion for web development started early in my studies when I created a landing page using HTML and CSS. This initial project inspired me to explore more advanced technologies and deepen my knowledge in the field. Recently, I developed a full-stack application, a food delivery and restaurant platform, similar to real-world apps, with additional features to enhance user experience. I am also skilled in coding, and I continuously work on strengthening my programming abilities to take on more complex projects. I am eager to build engaging websites and applications, using the latest technologies to create meaningful digital experiences.
        </p>
  
        <h2 className='titleofskill'>Here's a Glimpse of My Potential</h2>
  
        <div>
          <h3 className='heading'>Development Skills</h3>
          <img className='webimg' src="https://img.icons8.com/dotty/40/000000/web.png" alt="" />
          <div className="container mx-auto">
            <div className="row">
              {ps.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card">
                    <img src={item.imgg} alt={item.nameofskill} className="card-img" />
                    <div className="card-body">
                      <h4 className='fs-5'>{item.nameofskill}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <div>
          <h3 className='headingofps '>Programming Skills</h3>
          <div className="container mx-auto">
            <div className="row">
              {programmingskills.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="card ">
                    <img src={item.imgg1} alt={item.skill} className="card-img" />
                    <div className="card-body">
                      <h4 className='fs-5'>{item.skill}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className='projects'>Projects</p>
      <div className="projcontainer">
        <div className="projcard card">
          <p className='titleofproj fs-5'>Email Spam Detection</p>
          <p>Created a smart Python tool using machine learning that detects and filters spam emails, keeping inboxes clean and secure. It scans each email for suspicious keywords and patterns, instantly flagging unwanted messages. This solution enhances productivity by letting only valuable emails through, cutting down on distractions from spam while continuously improving its accuracy with machine learning.</p>         </div>
        <div className="projcard card">
          <p className='titleofproj fs-5'>Smart Parking Solution</p>
          <p>Developed a smart Java solution to assign parking slots based on each vehicle's stay duration. Vehicles with shorter stays are directed to quick-access spots, while long-term visitors receive extended spaces. The system automatically calculates fees, making the process smooth and convenient. An organized approach to stress-free parking management!</p>
        </div>
        <div className="projcard card">
          <p className='titleofproj fs-5'>Efficient Contact Manager</p>
          <p>Developed a user-friendly Phone Management System in C using efficient data structures. This tool simplifies contact management with quick search, addition, and deletion functions, ensuring organized and accessible information. Its seamless interface provides an intuitive experience, making it easy for users to manage their contacts with ease and efficiency.</p>
        </div>
        <div className="projcard card">
          <p className='titleofproj fs-5'>Real-World Restaurant Experience</p>
          <p>I developed a fully functional restaurant website that mirrors the real-world dining experience. The website allows users to explore a variety of dishes, including detailed menus, daily specials, and seasonal offerings. It features a user-friendly interface where customers can view restaurant ratings and reviews, ensuring they make informed decisions.</p>
        </div>
        </div>
      </div>
      
    );
  }
  
  export default Aboutme

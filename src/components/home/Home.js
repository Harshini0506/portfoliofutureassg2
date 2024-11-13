import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate=useNavigate()
  return (
    <div className='maindiv'>
      <div>
        <h1 className='intro'>Hello</h1>
        <p className='name'>I'm Harshini</p>
        <button className='formore rounded-4'onClick={()=>navigate("/aboutme")} >Let's Connect</button>
        <div className="paradiv">
          <p className='para'>
            Hello! I'm Bonagiri Harshini, an IT student at VNRVJIET. I'm really passionate about web development and love creating websites and applications that are not only functional but also fun to use. I'm always working on building my skills, exploring new tools, and thinking of creative ways to bring ideas to life online. Along with web development, I have a solid background in programming, which helps me solve problems and create clean, efficient code. I'm excited to take on new challenges and develop projects that make a difference!
          </p>
        </div>
      </div>
      <div className="img">
        <img className='imgconnect' src="https://fthmb.tqn.com/p2q1eR2CIKJgeruVRmpGdixftRU=/5671x4330/filters:fill(auto,1)/WirelessNetwork-5994852003f4020011db5333.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;




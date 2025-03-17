import React from 'react'
import SkillsCarousel from '../components/skillsCarousel/SkillsCarousel'
import './about.css'

const About = () => {
  return (
    <div className='about'>
      <h3>About Me</h3>
      <p>
      My names's Chafik TELLI and i'm a junior full-stack web developer, passionate about coding and new technologies.

      I began my development journey with a particular interest in JavaScript and modern frameworks like React.JS. My goal is to create high-performance, intuitive, and well-structured web applications.
      </p>
      <p>
      Currently pursuing a full-stack web development degree, I'm working on hands-on projects to improve my skills and prepare for the professional world.

      I'm motivated by technical challenges and enjoy learning new technologies to enhance my web development skills. My goal is to join a dynamic team to continue my development and contribute to innovative projects.
      </p>
      
      <h3>My Skills</h3>
      <p>
      Throughout my training and projects in web development, I have acquired solid skills in both front-end and back-end development, as well as in essential development tools. On the front-end side, I learned to structure web pages using HTML, style them with CSS, and make them interactive with JavaScript. I also mastered React.JS, which allowed me to develop dynamic and responsive interfaces using component-based programming. For design and layout, I worked with Bootstrap and TailwindCSS, two frameworks that facilitate the creation of modern and responsive user interfaces. </p>
      <p> On the back-end side, I developed APIs using Node.js and Express, while leveraging MongoDB as a NoSQL database to store and manage data. Finally, I integrated essential development tools into my workflow, such as Git/GitHub for version control and collaboration, as well as Postman for testing and debugging APIs. This experience has given me a comprehensive approach to web development, from designing user interfaces to managing data and servers.
      </p>

      <SkillsCarousel />
      
    </div>
  )
}

export default About

import React from 'react'
import SkillsCarousel from '../components/skillsCarousel/SkillsCarousel'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
      My names's Chafik TELLI and i'm a junior full-stack web developer, passionate about coding and new technologies.

      I began my development journey with a particular interest in JavaScript and modern frameworks like React.JS. My goal is to create high-performance, intuitive, and well-structured web applications.
      </p>
      <p>
      Currently pursuing a full-stack web development degree, I'm working on hands-on projects to improve my skills and prepare for the professional world.

      I'm motivated by technical challenges and enjoy learning new technologies to enhance my web development skills. My goal is to join a dynamic team in Europe to continue my development and contribute to innovative projects.
      </p>
      
      <SkillsCarousel />
      
      <h1>My Skills</h1>
      <p>
      ✅ Front-end : HTML, CSS, JavaScript, React.JS, BootStrap, TailwindCSS

      ✅ Back-end : Node.js, Express, MongoDB

      ✅ Development tools : Git/GitHub, Postman
      </p>
      <img src='https://www.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png?v=1637161606' alt='full-stack'/>
      <img src='https://miro.medium.com/v2/resize:fit:1400/0*2KQgVo4UeCNsOKnY.jpeg' alt='front-end'/>
      <img src='https://faq.o2switch.fr/_media/tuto-rapide/o2switch-deployer-react.js.png' alt='react'/>
      <img src='https://img-c.udemycdn.com/course/750x422/4383266_d1bc.jpg' alt='back-end'/>
    </div>
  )
}

export default About

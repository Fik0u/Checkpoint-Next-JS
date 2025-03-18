'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'


const SkillsCarousel = () => {
  return (

    <div className='container m-4'>


      <Carousel>
      <Carousel.Item>
        <img src='https://www.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png?v=1637161606' alt='full-stack' text="First slide" style={{height: '550px', width: '100%', borderRadius: '20px'}}/>
        <Carousel.Caption style={{color: 'black'}}>
          <h3 >Full-Stack Web Development</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='https://miro.medium.com/v2/resize:fit:1400/0*2KQgVo4UeCNsOKnY.jpeg' alt='front-end' text="Second slide" style={{height: '550px', width: '100%', borderRadius: '20px'}}/>
        <Carousel.Caption style={{color: 'black'}}>
          <h3 >Vanilla JavaScript Front-End</h3>
          <p>HTML, CSS and JavaScript</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='https://dyma.fr/blog/content/images/size/w960/2024/08/react1200x628.webp' alt='react' text="Third slide" style={{height: '550px', width: '100%', borderRadius: '20px'}}/>
        <Carousel.Caption style={{color: 'black'}}>
          <h3>React JS</h3>
          <p> Modern Front-End with React JS</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='https://framerusercontent.com/images/iGqleKlzrTkgifOmGqWFgW4xU.png' alt='bootstrap/tailwind' text="Forth slide" style={{height: '550px', width: '100%', borderRadius: '20px'}}/>
        <Carousel.Caption style={{color: 'white'}}>
          <h3>Bootstrap / Tailwind </h3>
          <p> CSS Frameworks for friendly, good-looking and responsive pages</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src='https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feb8yj4gbkuthhiqw3obm.jpeg' alt='back-end' text="Fiveth slide" style={{height: '550px', width: '100%', borderRadius: '20px'}}/>
        <Carousel.Caption style={{color: 'black'}}>
          <h3>Back-End with Node JS</h3>
          <p> Node JS environement and MongoDB </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default SkillsCarousel

'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'


const SkillsCarousel = () => {
  return (

    <div className='container m-4'>
      <h3>Those are my skills</h3>

      <Carousel>
      <Carousel.Item>
        <img src='https://www.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png?v=1637161606' alt='full-stack' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

        <img src='https://www.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png?v=1637161606' alt='full-stack' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.nemesis-studio.com/wp-content/uploads/2017/07/front-back-end.png?v=1637161606' alt='full-stack' text="Third slide"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default SkillsCarousel

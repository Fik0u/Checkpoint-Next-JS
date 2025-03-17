'use client'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProjectCard = ({proj}) => {


  return (
    <div style={{display: 'flex', justifyContent:'center'}}>
        <Card style={{ width: '30rem', margin: '40px', textAlign: 'center' }}>
      <Card.Body>
        <Card.Title> {proj.name} </Card.Title>
      <Card.Img variant="top" />

        <Button variant="primary">Check it Out</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProjectCard

'use client'
import React from 'react'
import { Button, Card } from 'react-bootstrap'


const ProjectCard = () => {


  return (
    <div style={{display: 'flex', justifyContent:'center', flexWrap: 'wrap'}}>

        <Card style={{ width: '30rem', margin: '40px', textAlign: 'center' }}>
      <Card.Body>
      <Card.Img variant="top" src= '/assets/landingTravel.png' />
        <Card.Title style={{margin: '20px'}}> Landing Travel </Card.Title>
        <Card.Text> This is one of my first projects, that i was really proud to make. It was about a landing page for a travel agency. This page was made with a responsive design using Bootstrap CSS. </Card.Text>
        <Button variant="primary" href=''>Check it Out</Button>
      </Card.Body>
    </Card>



        <Card style={{ width: '30rem', margin: '40px', textAlign: 'center' }}>
      <Card.Body>
      <Card.Img variant="top" src='/assets/checkMate.png' />
        <Card.Title style={{margin: '20px'}}> CheckMate </Card.Title>
        <Card.Text> I made this to-do list with React JS, a UI framework at its best. Its basic functionnality is to add tasks and change their state from done to undone and vice-versa</Card.Text>
        <Button variant="primary" href=''>Check it Out</Button>
      </Card.Body>
    </Card>


        <Card style={{ width: '30rem', margin: '40px', textAlign: 'center' }}>
      <Card.Body>
      <Card.Img variant="top" src='/assets/moovy.png'/>
        <Card.Title style={{margin: '20px'}}> Moovy </Card.Title>
        <Card.Text> This is a simple movie app that I created that allows the user or the client to add a movie to the list and filter them, either by title or rate. </Card.Text>
        <Button variant="primary" href=''>Check it Out</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProjectCard

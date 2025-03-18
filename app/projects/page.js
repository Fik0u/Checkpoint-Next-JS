'use client'
import React, { useState } from 'react'
import ProjectCard from '../components/projectCard/ProjectCard'

const Projects = () => {



  return (
    <div style={{textAlign: 'center', margin:'40px'}}>
      <h1> My Projects</h1>
      <p>Here you'll find some of the projects that i made along my courses in web development</p>
      <ProjectCard />

    </div>
  )
}

export default Projects


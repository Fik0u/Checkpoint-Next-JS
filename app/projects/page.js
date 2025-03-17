'use client'
import React, { useState } from 'react'
import ProjectCard from '../components/projectCard/ProjectCard'

const Projects = () => {

const [projList, setProjList] = useState([
  {
    name: 'Landing Travel',
    url: 'landingtravelfik.netlify.app',
  },
  {
    name: 'Glory Judicators',
    url: 'gloryjudicators.netlify.app',
  }
])

  return (
    <div>
      <h1> My Projects</h1>
      
      {projList.map(proj => <ProjectCard proj = {proj} key = {proj.name}/>)}

    </div>
  )
}

export default Projects


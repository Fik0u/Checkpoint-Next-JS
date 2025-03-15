import { FacebookOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'
import React from 'react'

const Footer = () => {
  return (
    <div style={{textAlign: 'center', margin:'20px'}}>
      <p> ©2025 Chafik TELLI. Tous droits réservés.</p>
      <div>
        <GithubOutlined className='m-2'/>
        <LinkedinOutlined className='m-2'/>
        <FacebookOutlined className='m-2'/>
        <InstagramOutlined className='m-2'/>
      </div>
    </div>
  )
}

export default Footer

'use client'
import { Button, Figure } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
  return (

   <div className= {styles.page}>
      <h4>Junior Software Developer</h4>
        <p>This is my personal portfolio and here you'll find everything about me and my journey into the web development world</p>
        <Button variant="outline-success" href="/about">About Me</Button>

      <Figure>
      <Figure.Image
        style={{width: '100%', height: '600px', borderRadius: '20px'}}
        alt="SoftDev"
        src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
        />
    </Figure>
    </div>
  );
}

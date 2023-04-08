import * as React from "react";
import {Link} from 'gatsby';
import Navbar from '../components/navbar/navbar';
import '../components/navbar/navbar.scss'

 const About = () => {
    return (
     <main>
      <div className="container">
        <Navbar/>
        <div className="container-inner">
           <h1>
        Team work 
      </h1>
      <Link to='/'>Back to home</Link>
        </div>
     
      </div>
      
     </main>
    )
  }
  
  export default About
  
  export const Head = () => <title>about</title>
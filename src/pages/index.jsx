import * as React from "react"
import {Link} from 'gatsby'; 
import './styles/styles.scss';
import Navbar from '../components/navbar/navbar';
import './index.scss'



const IndexPage = () => {
  return (
   <main className="main">
    <div className="container">
      <Navbar /> 
      <div className="container_inner">
          <h1>STEP FORWARD WITH KELECHEK DEVELOPERS!</h1>
    <h3>We are the team of best learners ever! Learn coding and happy hacking with us!</h3>
    <Link to='/about' className="btn">Learn more</Link>
      </div>
     
    </div>
   
   </main>
  )
}

export default IndexPage

export const Head = () => <>
<title>Home Page</title>
<meta name="description" content='Kelechek developers'/>
</>

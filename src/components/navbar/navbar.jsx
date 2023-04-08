import * as React from "react"
import {Link} from 'gatsby'; 

import './navbar.scss'
import feet from '../../images/feet.svg'



const Navbar = () => {

    const menuItems =[
        {
            id:1,
            name:'Home', 
            link:'/'
        },
        {
            id:2,
            name:'About',
            link:"/about"
        },
        {
            id:3,
            name:'Projects',
            link:'/projects'
        }
    ]
  return (
  <nav className="navbar">
    <div className="navbar_container">
        <div className="navbar_inner">
             <Link to="/" className='navbar_logo'>
                <img className='navbar_img' src={feet} alt='logo' width={90}/>        
            </Link>
            </div>

            <div className="navbar_menu">
            <ul>
            {
                menuItems.map((menuItem)=>{
                    return <li key={menuItem.id}>
                        <a href={menuItem.link} className="menu_link">{menuItem.name}</a>
                    </li>
                })
            }
           </ul>

            </div>

          
        </div>
           



  </nav>
  )
}

export default Navbar

export const Head = () => <>
<title>Navbar</title>
<meta name="description" content='Navbar'/>
</>

import React from 'react'
import Icon from "../image/icon.png"
const Navbar = () => {
  return (
    <div className='container'>
       <nav>
        <div className="logo">
            <img src={Icon} alt="icon" />
           <h1> Wealthfront</h1>
        </div>
        <ul>
           <a href="#">
           <li>Invest</li>
           </a>
            <a href="#">
            <li>Cash</li>
            </a>
            <a href="#">
            <li>Borrow</li>
            </a>
            <a href="#">
            <li>Blog</li>
            </a>
            
        </ul>
         <div className="btn-group">
            <button className='btn1'>Log in</button>
            <button className='btn2'>Get started</button>
         </div>
        </nav> 
    </div>
  )
}
export default Navbar;


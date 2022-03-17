import React from 'react';
import {Link,Outlet} from 'react-router-dom';
// import {GrHomeRounded} from 'react-icons/gr';
import './Navbar.scss';
import logo from "../../assets/CT-logo.png";
 
function Navbar() {
 return (
  <>
    <div className='navigation'>
      <Link className='logo-container' to="/">
      <div className='logo'> Logo </div>
      </Link>
      
      <div className='nav-link-container'>
          <ul>
            <li>
                <Link className="nav-link" to="/login">Log In</Link>
            </li>
            <li>
                <button><Link className="nav-link" to="/signup">Sign Up</Link></button>
            </li>
            
          </ul>
      </div>
    </div>
    <Outlet/>
  </>
  )
}
export default Navbar;


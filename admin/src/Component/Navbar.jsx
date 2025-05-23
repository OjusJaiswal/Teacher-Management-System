import React from 'react'
import {NavLink} from 'react-router-dom';
import '../css/navStyle.css'

function Navbar() {
  
 
  
  let activeStyle = {
    textDecoration: "none",
    color:"orange"
  };
  return (
    <>
    <header>
        <div className="lcontainer lcontainer-flex ">
          
          
          <nav className="navbar">
            <div className="List">
              

              <NavLink to="/" className="listItem"  style={({ isActive }) =>
              isActive ? activeStyle : undefined}>Home</NavLink>
              


              

              <NavLink to="/Teacher" className="listItem" id='tea' style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Manage Teachers</NavLink>
          

              <NavLink to="/School" className="listItem" id='sch'style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Manage Schools</NavLink>
              
              <NavLink to="/Vacancy" className="listItem" id='vac' style={({ isActive }) =>
              isActive ? activeStyle : undefined }> Manage Vacancy</NavLink>
              <NavLink to="/Calapp" className="listItem" id='cal' style={({ isActive }) =>
              isActive ? activeStyle : undefined } >Calendar</NavLink>

              <NavLink to="/Analytics" className="listItem" id='ana' style={({ isActive }) =>
              isActive ? activeStyle : undefined } > Analytics </NavLink>



              
            </div>
          </nav>

          



        </div>
      </header>
      
      
    </>
  )
}

export default Navbar
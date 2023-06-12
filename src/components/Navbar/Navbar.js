import React from 'react'
import '../Navbar/Style.css'
import logo from '../../assets/jio_bp.png'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <Link class="navbar-brand"to="/"><img className='logostyle' src={logo} alt="" /></Link>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link" to ="/home">
      <i class="fa-solid fa-house"></i>Fleet</Link>
        </li>
        <li class="nav-item">
        <Link  to ="/notifications" className='nav-link'><i class="fa-solid fa-bell"></i>Quality Monitoring</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to ="/aging">
      <i class="fa-solid fa-clock"></i>Fleet Aging</Link>
        </li>
      </ul>
      <div className='main d-flex'>
      <span><i class="fa-solid fa-user"></i>John Doe</span>
      <Link to="/"><i class="fa-solid fa-arrow-right-from-bracket"></i>Sign Out</Link> 
      </div>
    </div>
  </div>
</nav>
        </>
        // <div>
        //     <nav class="navbar navbar-expand-lg">
        //         <Link className='navbar-brand' to='/'>
        //             <img className='logostyle' src={logo} alt="" />
        //         </Link>
        //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarNav">
        //             <ul class="navbar-nav">
        //                 <li class="nav-item">
        //                 <Link class="nav-link" to ="/home">
        //                         <i class="fa-solid fa-house"></i>Fleet</Link>

        //                 </li>
        //                 <li class="nav-item">
        //                 <Link class="nav-link" to ="/notifications">
        //                         <i class="fa-solid fa-bell"></i>Quality Monitoring</Link>
        //                 </li>
        //                 <li class="nav-item">
        //                 <Link class="nav-link" to ="/aging">
        //                         <i class="fa-solid fa-clock"></i>Fleet Aging</Link>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className='main'>
                   
        //             <span><i class="fa-solid fa-user"></i>John Doe</span>
                  
        //              <Link to="/"><i class="fa-solid fa-arrow-right-from-bracket"></i>Sign Out</Link>  
        //         </div>
        //     </nav>
        // </div>
    )
}

export default Navbar
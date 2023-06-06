import React from 'react'
import '../Navbar/Style.css'
import logo from '../../assets/jio_bp.png'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="#">
                    <img className='logostyle' src={logo} alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                                <i class="fa-solid fa-house"></i>Fleet</a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa-solid fa-bell"></i>Quality Monitoring</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <i class="fa-solid fa-clock"></i>Fleet Aging</a>
                        </li>
                    </ul>
                </div>
                <div className='main'>
                    <a href="#">
                    <i class="fa-solid fa-user"></i>John Doe</a>
                    <a href="#">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>Sign Out</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
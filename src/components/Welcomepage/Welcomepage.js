import '../../components/Welcomepage/Welcomepage.css'
import React from 'react'
import logo from '../../assets/jio_bp.png'
import { Link } from "react-router-dom";
const Welcomepage = () => {
  return (
    <div className='Welcome-component'>
       <Link to ="/login"> <button type="button" className="btnlog btn btn-lg">Click here to Login</button></Link>
        <img className='imgstyle' alt='' src={logo}/>
    </div>
  )
}

export default Welcomepage
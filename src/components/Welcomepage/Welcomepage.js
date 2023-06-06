import '../../components/Welcomepage/Welcomepage.css'
import React from 'react'
import logo from '../../assets/jio_bp.png'
const Welcomepage = () => {
  return (
    <div className='Welcome-component'>
        <button type="button" class="btn btn-lg">Click here to Login</button>
        <img alt='' src={logo}/>
    </div>
  )
}

export default Welcomepage
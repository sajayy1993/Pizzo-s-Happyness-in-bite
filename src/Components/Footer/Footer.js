import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='containerfoo'>
        <div className='footer'>
         <h3>Contact Us</h3>
         <div className='inpu'>
            <input type='text' placeholder='Enter mail ' />
            <button className='foobtn'>Send</button>
         </div>
        </div>
    </div>
  )
}

export default Footer
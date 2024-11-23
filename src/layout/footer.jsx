import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="above">
            <img src="src/assets/Logo (1).png" alt="" />

            <div className="pis">
              <p>Privacy Policy</p>
              <p>Term & Conditions</p>
              <p>About us</p>
              <p>Contact</p>
            </div>
        </div>

        <hr style={{color: 'gray', marginTop: '40px'}}/>

        <div className="below">
            <p>© 2023 EATLY All Rights Reserved.</p>

            <img src="src/assets/Socials (1).png" alt="" />
        </div>
    </div>
  )
}

export default Footer

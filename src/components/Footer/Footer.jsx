

import React from 'react'

function Footer() {
  return (
    <div className='Footer flex items-center justify-evenly flex-col py-12'>
      <div className="footer_logo flex items-center">
        <img className='px-2' src="Images/night.png" alt="night" style={{ height: "35px" }} />
        <a href="/">Sky<span className='span_C_fooot'>C</span>ast</a>
      </div>

      {/* <div className="footer_links">
        <ul className='flex'>
          <li className='px-6'><a href="#">Home</a></li>
          <li className='px-6'><a href="#">News</a></li>
          <li className='px-6'><a href="#">Contact</a></li>
        </ul>
      </div> */}

      <div className="divider"></div>

      <div className="end flex justify-between">
        <div className="copyrights">© 2024 SkyCast. All rights reserved</div>
        <div className="socials">
          <span><a href="https://www.linkedin.com/in/himanshuprajapati23/"><i className="fa-brands fa-linkedin"></i></a></span>
          <span><a href="https://twitter.com/Himanshu2623"><i className="fa-brands fa-x-twitter"></i></a></span>
          <span><a href="https://www.youtube.com/@justfunvlogs2326"><i className="fa-brands fa-youtube"></i></a></span>
          <span><a href="https://www.instagram.com/himanshu_prajapati2326/"><i className="fa-brands fa-instagram"></i></a></span>
        </div>
      </div>

    </div>
  )
}

export default Footer

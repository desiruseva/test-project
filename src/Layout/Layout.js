import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
// import MobileFooter from './Footer/MobileFooter.js'

function Layout({children}) {
  return (
    <>
        <div className='bg-main text-white '>
            <Navbar/>
            <div className='container mx-auto px-10'>
              {children}
            </div>
            <Footer/>
            {/* MOBILE FOOTER */}
            {/* <MobileFooter/> */}
        </div>
    </>
  )
}

export default Layout
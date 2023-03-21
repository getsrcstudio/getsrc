import React  from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

 const Layout=({children})=> {
  return (
    <>    
    <Navbar title="GET SRC"/>
    <div className='container mt-5 mb-5'>
    {children}
    </div>
    <Footer/>
    
    </>
  )
}
export default Layout;
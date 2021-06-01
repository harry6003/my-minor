import React from 'react'
import Navbar from './Navbar'
import maincollegelogo from '../headerofclg.png'
export default function About() {
  return (
    <div className="allabout">
    <Navbar/>
      <div className="collegeheader"><img src={maincollegelogo} alt="headerofclg" /></div>
      <div className="infoaboutdepartment">
        
      </div>
    </div>
  )
}

import React, { Component } from 'react'
import clglogo from '../gcoea.jpg'
import avatar from '../avataaars.png'
export default class Navbar extends Component {
  render() {
    return (
      <div>
       <div className="outernavbar">
         <div className="leftnavbar">
         <img src={clglogo} alt="college-logo" width="60px"/>
          <h1>My College</h1>
         </div>
         <div className="rightnavbar">
          <img src={avatar} alt="avatar" width="50px" />
         </div>

       </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Books from './Books'
import Links from './Links'
import References from './Refrences'

import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Subjectnav from './Subjectnav';
export default class Cplusplus extends Component {
  render() {
    return (
      <div>
            <Navbar/>
            <div className="s-container">
            <div>
                <h1 className="heading-sub">C++</h1>
                <p className="des-para">
                C++ is an object-oriented computer language created by notable computer scientist Bjorne Stroustrop as part of the evolution of the C family of languages. C++ is pronounced "see-plus-plus." It was developed as a cross-platform improvement of C to provide developers with a higher degree of control over memory and system resources.
                Today C++ is still very appreciated for its notable portability which allows developers to create programs that can run on different operating systems or platforms very easily. Despite being a high-level language, since C++ is still close to C it can be used for low-level manipulation due to its close relation with machine language.
                In object-oriented programming, an object is a data type that has both data and functions inherent in its design. Prior to the advent of object-oriented programming, programmers typically saw a codebase as composed of individual command line instructions. The identification of objects with data and functions built in led to a new way of packaging and automating code work.
                </p>
            </div>
            <div>
               
            </div>
        </div>
      </div>
    )
  }
}

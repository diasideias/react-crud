import './App.css'
import React from 'react'

import Logo from '../component/template/Logo'
import Nav from '../component/template/Nav'
import Main from '../component/template/Main'
import Footer from '../component/template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav />
        <Main />
        <Footer />  
    </div>

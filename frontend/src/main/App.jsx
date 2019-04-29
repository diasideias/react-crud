import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
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
        <Main icon="home" title="Início"
            subtitle="Segundo Projeto do capítulo de React." />
        <Footer />  
    </div>

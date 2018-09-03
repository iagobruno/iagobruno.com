import React, { Fragment } from 'react'

import Header from '../components/Header'
import About from '../components/About'
import CreativeProcess from '../components/CreativeProcess'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Footer from '../components/Footer'

export default (props) => (
  <Fragment>
    <Header />
    <About />
    <CreativeProcess />
    <Skills />
    <Works />
    <Footer />
  </Fragment>
)
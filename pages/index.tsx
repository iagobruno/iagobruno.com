import React, { Fragment } from 'react'
import Head from 'next/head'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import CreativeProcess from '../components/CreativeProcess/CreativeProcess'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'
import Footer from '../components/Footer/Footer'

export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Iago Bruno &#8212; Full Stack Developer</title>
      </Head>

      <div className="home-page">
        <Header />
        <About />
        <CreativeProcess />
        <Skills />
        <Works />
        <Footer />
      </div>
    </Fragment>
  )
}

import React, { Fragment } from 'react'
import Head from 'next/head'

import Header from '../components/Header'
import About from '../components/About'
import CreativeProcess from '../components/CreativeProcess'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Footer from '../components/Footer'

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

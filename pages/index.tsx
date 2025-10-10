import React, { Fragment } from 'react'
import { NextPage } from 'next'

import Header from '../components/Header/Header'
import About from '../components/About/About'
import CreativeProcess from '../components/CreativeProcess/CreativeProcess'
import Skills from '../components/Skills/Skills'
import Works from '../components/Works/Works'
import Footer from '../components/Footer/Footer'
import SocialTags from '../components/SocialTags'
// import BlogList from '../components/BlogList/BlogList'

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <SocialTags
        page_title="Iago Bruno &#8212; Full Stack Developer"
        description="Programador web com experiência vasta em JavaScript, Node, React, CSS, entre outras tecnologias."
        url="https://www.iagobruno.com/"
        image="https://www.iagobruno.com/static/images/website-print.jpg"
      />

      <div className="page home-page">
        <Header mode="full" />
        <About />
        <CreativeProcess />
        <Skills />
        <Works />
        {/*<BlogList length={3} />*/}
        <Footer />
      </div>
    </Fragment>
  )
}

export default HomePage

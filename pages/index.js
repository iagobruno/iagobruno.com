import React, { Component } from 'react'

import Header from '../components/Header'
import About from '../components/About'
import CreativeProcess from '../components/CreativeProcess'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Footer from '../components/Footer'

const Delegate = require('delegate')

class HomePage extends Component {
  componentDidMount() {

    // Delegar um evento global para todos os links da página
    Delegate('a', 'click', this.linkClick)
  }

  linkClick(event) {
    let link = event.delegateTarget,
      url = link.href
    
    // Checar se é um link específico da sessão "Sobre"
    if (/\#work-tecbolt$/g.test(url)) {
      event.preventDefault()
  
      // Mover o scroll até a sessão #works
      location.hash = '#works'
  
      // Dar foco ao link do tecbolt
      document.getElementById('work-tecbolt').focus()
    }

    // Enviar evento para o Google Analytics
    gtag('event', 'click', {
      'event_category': 'links',
      'event_label': 'Cliques em "' + url + '"'
    })
  }  

  render() {
    return (
      <div className="home-page">
        <Header />
        <About />
        <CreativeProcess />
        <Skills />
        <Works />
        <Footer />
      </div>
    )
  }
}

export default HomePage
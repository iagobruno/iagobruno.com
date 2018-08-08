import React, { Component, Fragment } from 'react'

import Header from './Header'
import About from './About'
import CreativeProcess from './CreativeProcess'
import Skills from './Skills'
import Works from './Works'
import Footer from './Footer'
import GoogleAnalytics from './GA'

class Document extends Component {
  static getInitialProps = async () => ({
    
  })

  render() {
    return (
      <html lang="pt-BR">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Iago Bruno &#8212; Full Stack Developer</title>
          <meta name="description" content="Designer e programador de websites." />
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
          <meta name="keywords" content="Full-stack developer,Front end developer,Desenvolvedor javascript,Desenvolvedor de sites,Website developer,NodeJS,javascript,programador,Ceará,Brasil,designer,designer de sites,designer de aplicativos," />
          <meta name="robots" content="index,follow" />
          
          {/* Social tags */}
          <meta property="og:url" content="http://httpiago.github.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Iago Bruno &#8212; Full Stack Developer" />
          <meta property="og:image" content="assets/images/cover.jpg" />
          <meta property="og:description" content="Designer e programador de websites." />
          <meta property="og:site_name" content="Iago Bruno" />
          <meta property="og:locale" content="pt_BR" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="http://httpiago.github.io" />
          <meta name="twitter:title" content="Iago Bruno &#8212; Full Stack Developer" />
          <meta name="twitter:description" content="Designer e programador de websites." />
          <meta name="twitter:image" content="assets/images/cover.jpg" />
          
          {/* Assets da página */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&ver=4.8.6" type="text/css" media="all" />
          <link rel="stylesheet" href="assets/styles.css" type="text/css" media="screen" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <GoogleAnalytics />
        </head>
        <body>
          <Header />
          <About />
          <CreativeProcess />
          <Skills />
          <Works />
          <Footer />
          
          <Fragment>
            <script src="assets/delegate.js"></script>
            <script src="assets/scrollreveal.min.js"></script>
            <script src="assets/functions.js"></script>
          </Fragment>
        </body>
      </html>
    )
  }
}
 
export default Document
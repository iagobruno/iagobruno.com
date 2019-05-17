import * as React from 'react'
import App, { Container, NextAppContext } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import withGA from 'next-ga'

import '../styles/main.less'
import '../styles/nprogress.css'

import Notification from '../components/Notification/Notification'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    console.log('%c👀', 'font-size: 20px;');
  }
  
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        <Notification />
      </Container>
    )
  }
}

NProgress.configure({
  trickleSpeed: 100,
  showSpinner: false
})

// Mostrar barra de progresso durante a troca de página
Router.events.on('routeChangeStart', (url: string) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default withGA('UA-119109259-1', Router)(MyApp)
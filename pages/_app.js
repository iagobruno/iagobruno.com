import React from 'react'
import App, { Container } from 'next/app'
import '../styles/main.less'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  
  componentDidMount() {
    // Ativar o modo design durante o desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      document.designMode = 'on'

      let logStyle = 'background: green; border-radius:2px; color:white; padding: 0 4px;'
      console.log('%cDesign mode: ON', logStyle, 'Você pode editar qualquer texto diretamente no DOM.')
    }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
import Document, { Head, Main, NextScript } from 'next/document'
import { NextDocumentContext } from 'next'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta name="keywords" content="Full-stack developer,Front end developer,Desenvolvedor javascript,Desenvolvedor de sites,Website developer,NodeJS,javascript,programador,Ceará,Brasil,designer,designer de sites,designer de aplicativos," />
          <link rel="alternate" type="application/rss+xml" title="Blog RSS Feed" href="/static/rss-feed.xml" />
          <meta name="robots" content="index,follow" />

          {/* Assets da página */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&ver=4.8.6" type="text/css" media="all" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

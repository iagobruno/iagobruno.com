/**
 * @todo:
 * Usar esse componente quando o site tiver muitas páginas por que essa solução atual não funciona para troca de páginas do next.
 * https://github.com/sergiodxa/next-ga
 */
import React from 'react'

const Fragment = ({ children }) => React.Children.toArray(children)

export default () => (
  <Fragment>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119109259-1"></script>
    <script dangerouslySetInnerHTML={{__html: `
      window.dataLayer = window.dataLayer || []; 
      function gtag() { dataLayer.push(arguments); } 
      gtag('js', new Date()); 
 
      gtag('config', 'UA-119109259-1');
    `.replace(/\r?\n|\r/g, '')}}></script>
  </Fragment>
)
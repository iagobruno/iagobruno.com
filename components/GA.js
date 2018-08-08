import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-119109259-1"></script>
    <script>
      window.dataLayer = window.dataLayer || []; 
      function gtag() { dataLayer.push(arguments); } 
      gtag('js', new Date()); 
 
      gtag('config', 'UA-119109259-1');
    </script>
  </Fragment>
)
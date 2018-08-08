import React from 'react'

const links = [
  { text: 'Email', url: 'mailto:httpiago@gmail.com' },
  { text: 'Telefone', url: 'tel:+5588999892495' },
  { text: 'Facebook', url: 'https://www.facebook.com/httpiago' },
  { text: 'Instagram', url: 'https://www.instagram.com/httpsiago/' },
  // { text: 'Pinterest', url: 'https://pinterest.com/httpiago/' },
  // { text: 'Last.fm', url: 'https://www.last.fm/user/httpiago' },
  { text: 'Messenger', url: 'https://m.me/httpiago' },
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/iagobruno/' },
  { text: 'Github', url: 'https://github.com/httpiago/' }
]

export default (props) => {
  return (
    <footer id="contact">
      <center>
        <h1 className="footer-title">Contato</h1>
        <ul className="links">
          {links.map((link, i) => (
            <li key={i}><a href={link.url}>{link.text}</a></li>
          ))}
        </ul>
        <a className="code-note" href="https://github.com/httpiago/httpiago.github.io">
          <svg viewBox="0 0 20 15" width="18" height="13"><path d="M13.197.39l-2.084 2.083 4.862 4.862-4.862 4.862 2.084 2.084 6.251-6.946-6.25-6.946zm-6.946 0L0 7.334l6.251 6.946 2.084-2.084-4.862-4.862 4.862-4.862L6.251.389z" fillRule="nonzero" fill="#333333"></path></svg>
          <span>com</span>
          <svg viewBox="0 0 18 16" width="14" height="13"><path d="M15.948 1.39C15.226.513 14.21.07 12.892 0c-1.348 0-2.348.583-3.056 1.39-.709.805-1.084 1.277-1.112 1.388-.028-.11-.389-.583-1.111-1.389C6.89.583 5.988 0 4.557 0 3.237.07 2.209.528 1.5 1.39.778 2.236.417 3.166.389 4.167c0 .722.125 2.111.93 3.709.807 1.597 3.252 4.084 7.405 7.404 4.14-3.32 6.627-5.793 7.418-7.404.792-1.612.917-3.015.917-3.71-.028-1-.389-1.93-1.111-2.806v.028z" fillRule="nonzero" fill="#EF5350"></path></svg>
          <span>por</span>
          <span>mim mesmo :)</span>
        </a>
      </center>
    </footer>
  )
}
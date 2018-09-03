import React from 'react'

export default (props) => {
  return (
    <section id="about">
      <center>
        <div className="code-sample-container">
          <img className="code-sample" src="static/images/code_react.jpg" alt="Exemplo de um componente do React" />
          <img className="code-sample" src="static/images/code_html.jpg" alt="Exemplo de um código HTML" style={{display: 'none'}} />
          <img className="code-sample" src="static/images/code_nodejs.jpg" alt="Exemplo de um código JavaScript" style={{display: 'none'}} />
        </div>
        <div>
          <p><b>Hello, World!</b></p>
          <p>Me chamo Iago, moro no Ceará, tenho 22 anos de idade e sou programador desde os 15. Sou apaixonado por códigos e aprendi tudo sozinho, movido pela curiosidade de saber como a web funcionava, desde então, venho estudando novas linguagens programação, conceituando e desenvolvendo websites, como o design do <a href="#work-tecbolt">TecBolt</a>, que construí em parceria com o fundador do mesmo.</p>
          <p>Possuo experiência vasta em HTML, CSS, JavaScript, PHP e estando ainda a aprender a dominar o desenvolvimento de aplicativos para celulares. <br/>Você pode conferir <a href="#skills">minhas outras habilidades</a> abaixo.</p>
        </div>
      </center>
    </section>
  )
}
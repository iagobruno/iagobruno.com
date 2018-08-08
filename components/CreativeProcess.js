import React from 'react'

export default (props) => {
  return (
    <section id="creative-process">
      <center>
        <h2 className="section-title">Processo criativo</h2>
        <ul className="list cols-3">
          <li>
            <div className="list-icon" style={{backgroundPosition: '-100px 0'}}></div>
            <div className="list-title">Planejamento</div>
            <p className="list-description">Assim como em qualquer projeto um bom planejamento evita uma grande quantidade de contratempos que venham ocorrer, então nesse ponto é definido com a equipe qual os objetivos do projeto, quais ferramentas serão usadas, em qual serviço será hospedado, entre outros.</p>
          </li>
          <li className="shadow">
            <div className="list-icon" style={{backgroundPosition: '1px 0'}}></div>
            <div className="list-title">Protótipo</div>
            <p className="list-description">Consiste em criar uma versão preliminar do site ou aplicativo com base na identidade visual da empresa. Nessa etapa não tem segredo, pego um lápis e papel para desenhar e posteriormente se necessário uso o InVision para criar uma versão testável.</p>
          </li>
          <li>
            <div className="list-icon"  style={{backgroundPosition: '-50px 0'}}></div>
            <div className="list-title">Desenvolvimento</div>
            <p className="list-description">Após esses passos anteriores vem a parte mais legal, CODAR! <br/>Minhas ferramentas favoritas para trabalhar são o Visual Studio Code, o Chrome Dev Tools, o Git para o controle de versão e o bom e velho amigo do programador: a linha de comando.</p>
          </li>  
        </ul>
      </center>
    </section>
  )
}
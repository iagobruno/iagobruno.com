import React from 'react'

const workList = [
  {
    title: 'TecBolt',
    subTitle: '2017',
    url: 'https://tecbolt.appolo.com.br/',
    image: 'assets/images/tecbolt-mini.jpg'
  },
  {
    title: 'Lembretes',
    subTitle: '2014',
    url: 'https://chrome.google.com/webstore/detail/lembretes/gklelabcnmojaikonejpecffihnpcpoc',
    image: 'assets/images/lembretes-mini.jpg'
  },
  {
    title: 'Rede Social Beta',
    subTitle: '2012 - 2015',
    url: 'http://www.redesocialbeta.com.br/',
    image: 'assets/images/rede_social_beta-mini.jpg'
  }
]

export default (props) => {
  return (
    <section id="works">
      <center>
        <h2 className="section-title">Trabalhos</h2>
        <ul className="list cols-3">
          {workList.map((work, index) => {
            let id = 'work-' + work.title.toLowerCase().replace(/(\s)/g, '')
            let alt = (work.title === 'Lembretes')
              ? 'Captura de tela da página do Lembretes na Chrome Web Store'
              : 'Captura de tela do site ' + work.title

            return (
              <li key={index}>
                <a href={work.url} target="_blank" rel="noopener" id={id}>
                  <img className="list-thumb" src={work.image} alt={alt} />
                  <div className="list-title">{work.title} <span>({work.subTitle})</span></div>
                </a>
              </li>
            )  
          })}
        </ul>
      </center>
    </section>
  )
}
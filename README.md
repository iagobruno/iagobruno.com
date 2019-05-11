[<img align="right" width="380" src="/static/images/website-print.jpg"/>](https://www.iagobruno.com/)

# iagobruno.com
Meu portifólio para apresentação do meu trabalho, habilidades e projetos realizados.

[![Visitar website](https://img.shields.io/website/https/www.iagobruno.com.svg)](https://www.iagobruno.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/aea4592e-19c7-4d18-85cf-d7bff624e9ea/deploy-status)](https://app.netlify.com/sites/iagobruno-com/deploys)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28419b5ab582462bad5995f50c53e8ca)](https://www.codacy.com/app/httpiago/www.iagobruno.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=httpiago/www.iagobruno.com&amp;utm_campaign=Badge_Grade)

> Proibido modificar, distribuir ou fazer uso pessoal sem a prévia autorização, porém, sinta-se livre para estudar os códigos e fazer seu próprio portifólio.

## Comandos

**`yarn run dev`**: Iniciar o servidor em modo de desenvolvimento com hot-reload.

**`yarn run build`**: Criar uma versão de produção minificada do site pronta para ser hospedada pela Netlify.

**`yarn run start`**: Iniciar a versão de produção na máquina local (requer que o comando "build" seja chamado antes).

**`yarn run generate-rss-feed`**: Exatamente, gera o feed rss e um cache de postagens do blog. (Ele é executado automaticamente antes dos comandos "dev" e "build")


## Estrutura do projeto

```
.
├── components      // Pastas de componentes do projeto
│   ├── Header
│   │   └── Header.jsx
│   ├── Footer
│   └── ...
├── pages           // Páginas do site
│   ├── posts       // Contém as postagens do blog
│   │   ├── hello-world.mdx
│   │   └── ...
│   ├── index.js
│   ├── posts.js
│   └── ...
├── static          // Arquivos (imagens, svgs) para serem hospedados no site pelo Next
│   ├── images
│   │   └── ...
│   └── favicon.ico 
├── styles          // Pasta com arquivos de estilo
│   └── main.less
├── .gitignore
├── next.config.js  // Configurações do Next
├── package.json
├── README.md
└── Utils.ts        // Contém funções e variáveis que podem ser usadas mais de uma vez dentro do projeto.
```

## Bibliotecas e ferramentas usadas

- [React](http://reactjs.org): Para componentizar o site.
- [Next](https://github.com/zeit/next.js): Para criar um site estático com server side rendering usando os componentes do React.
- [TypeScript](https://typescriptlang.org): Para fazer a tipagem dos códigos e dos componentes.
- [MDX](https://mdxjs.com/): Para escrever as postagens do blog usando markdown e JSX.
- [Less](http://lesscss.org): Foi o escolhido para pré-processar o css.
- [ScrollReveal](https://github.com/scrollreveal/scrollreveal): Animar os blocos (header, about, ...) do site a medida em que eles vão aparecendo.
- [next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css) e [next-less](https://github.com/zeit/next-plugins/tree/master/packages/next-less): Para permitir a importação de arquivos css e less dentro dos arquivos js.

## Páginas e postagens

Para criar uma nova página basta criar um novo componente React dentro da pasta "pages" e o nome do arquivo será mapeado para o endereço do site, por exemplo: 
"pages/about.js" será acessado em "www.iagobruno.com/about"

[Ver mais na documentação do Next](https://github.com/zeit/next.js).

### Criar uma nova postagem

Todas as postagens são escritas usando [MDX](https://mdxjs.com/syntax), que possibilita utilizar componentes do React junto com o [markdown tradicional](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). Igual as páginas comuns, os arquivos .mdx  dentro da pasta `/pages/posts/` serão mapeados para o endereço do site.

Exemplo:

```js
// pages/posts/hello-world.mdx
import PostPage from '../../components/PostPage/PostPage'

export const meta = {
  title: 'Olá mundo!', // Título da postagem
  summary: 'resumo', // Um breve resumo que irá aparecer nas redes sociais e no Google.
  publishDate: '2018-05-10T12:00:00Z', // ano-mês-dia hora-minuto-segundo
  image: '/static/...', // Capa da postagem
  slug: 'hello-world' // Exatamente o nome desse arquivo sem a extensão .mdx
};

Conteúdo da postagem...

export default ({ children }) => <PostPage {...meta}>{children}</PostPage>

```

A postagem acima poderá ser acessada em "www.iagobruno.com/posts/hello-world".

## Componentes

Esse projeto usa um padrão de organização chamado "modlet" em que cada componente ~~importante~~ tem sua própria pasta e dentro dela possui todos os arquivos relativos aquele componente, por exemplo:

```
componentes
├── About
│   ├── About.jsx        // Componente
│   ├── About.less       // Estilos
│   ├── About.test.js    // Testes
│   └── About.mdx        // Documentação
└── ...
```

## Estilização dos componentes

Há duas maneiras de estilizar os componentes, uma delas é criando um arquivo .less ou .css ~~com somente os estilos dele~~ e importá-lo e o outro é com o [styled-jsx](https://github.com/zeit/styled-jsx) padrão do next. Exemplos:

#### Importando arquivo separado:

```js
// Header/Header.js
import React from 'react'
import './Header.less'

export defult () => (
  <div className="header-container">...</div>
)

// Header/Header.less
.header-container {
  background: #EEEEEE;
  display: flex;
}
...
```

OBS: Durante o processo de build o next unifica todos os arquivos importados de todas as páginas em um único arquivo css global que é colocado automaticamente em todas as páginas visitadas pelo usuário, então, deve-se ficar atento futuramente para o usuário não ter que carregar muitos bytes de css desnecessários.

#### Usando o styled-jsx:

```js
import React, { Fragment } from 'react'

export defult (props) => (
  <Fragment>
    <div className="header">...</div>

    <style jsx>{`
      .header-container {
        background: ${props.color || '#EEEEEE'};
        display: flex;
      }
    `}</style>
  </Fragment>
)
```

Com esse método é possível modificar o css sempre que o componente for atualizado como mostrado acima. Além disso, diferente da outra maneira, o next só coloca esse estilo na página se o componente for solicitado pela renderização, isso é bom para evitar carregamento desnecessário de css que não será usado.

## Hospedagem

A Hospedagem fica por conta da [Netlify](https://www.netlify.com) que faz o deploy automático (Continuous deployment) a cada novo commit neste repositório remoto e distribui os arquivos estáticos gerados pelo NextJS.

Fluxograma:
![Fluxograma da hospedagem](/static/images/Netlify_Flow_Chart.jpeg)

[Link do projeto na Netlify](https://app.netlify.com/sites/iagobruno-com).

OBS: O domínio está registrado na Umbler.

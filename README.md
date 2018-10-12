[<img align="right" width="380" src="/static/images/website-print.jpg"/>](https://www.iagobruno.com/)

# iagobruno.com
Meu portifólio para apresentação do meu trabalho, habilidades e projetos realizados.

[![Visitar website](https://img.shields.io/website/https/www.iagobruno.com.svg)](https://www.iagobruno.com) 
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/28419b5ab582462bad5995f50c53e8ca)](https://www.codacy.com/app/httpiago/www.iagobruno.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=httpiago/www.iagobruno.com&amp;utm_campaign=Badge_Grade)

> Proibido modificar, distribuir ou fazer uso pessoal sem a prévia autorização, porém, sinta-se livre para estudar os códigos e fazer seu próprio portifólio.

## Comandos

**`yarn run dev`**: Iniciar o servidor em modo de desenvolvimento com hot-reload.

**`yarn run build`**: Criar uma versão de produção minificada do site pronta para ser hospedada pela Netlify.

**`yarn run start`**: Iniciar a versão de produção na máquina local (requer que o comando "build" seja chamado antes).

**`yarn run docs`**: Iniciar o [Docz](https://github.com/pedronauck/docz/).


## Estrutura do projeto

```
.
├── components      // Pastas de componentes do projeto
│   ├── Header
│   │   └── Header.jsx
│   ├── Footer
│   └── ...
├── docs            // Contém a documentação dos componentes
├── pages           // Páginas do site
│   ├── index.js
│   ├── posts.js
│   └── ...
├── static          // Arquivos (imagens, svgs) para serem hospedados no site pelo Next
│   ├── images
│   │   └── ...
│   └── favicon.ico 
├── styles          // Arquivos de estilos
│   └── main.less
├── .gitignore
├── doczrc.js       // Configurações do docz
├── next.config.js  // Configurações do Next
├── package.json
└── README.md
```

## Bibliotecas e ferramentas usadas
- [**Next.js**](https://github.com/zeit/next.js): Para criar o site estático usando os componentes do React.
- **React**: No modo de desenvolvimento.
- **Preact**: No site em produção pra diminuir o tamanho 
do bundle.
- [**prop-types**](https://www.npmjs.com/package/prop-types): Pra fazer a checagem dos tipos nas propriedades dos componentes.
- [**docz**](https://github.com/pedronauck/docz): Documentação dos componentes.
- [**Less**](http://lesscss.org)
- [**Delegate**](https://github.com/zenorocha/delegate): Criar eventos globais.
- [**ScrollReveal**](https://github.com/scrollreveal/scrollreveal): Animar os blocos (header, about) do site a medida em que eles vão aparecendo.
- [**directory-named-webpack-plugin**](https://www.npmjs.com/package/directory-named-webpack-plugin)
- [**next-css**](https://github.com/zeit/next-plugins/tree/master/packages/next-css) e [**next-less**](https://github.com/zeit/next-plugins/tree/master/packages/next-less): Para permitir a importação de arquivos css e less dentro dos arquivos js.

## Páginas

Para criar uma nova página basta criar um novo componente em React dentro da pasta "pages" e o nome do arquivo será mapeado para o endereço do site, por exemplo: 
"pages/about.js" será acessado em "www.exemplo.com/about"

[Ver mais na documentação do Next](https://github.com/zeit/next.js).

## Componentes

Esse projeto usa um padrão de organização chamado "modlet" em que cada componente ~~importante~~ tem seu própria pasta e dentro dela possui todos os arquivos relativos aquele componente, por exemplo:

```
componentes
├── About
│   ├── About.jsx        // Componente
│   ├── About.less       // Estilos
│   ├── About.test.js    // Testes
│   └── About.mdx        // Documentação
└── ...
```

OBS: Para chamar um componente basta só referenciar a pasta dele, por que esse projeto tem instalado um plugin do webpack que chama o arquivo com mesmo nome da pasta.

Então `import About from './components/About'` é o mesmo que `import About from './components/About/About.js'`

## Estilização dos componentes

Tem duas maneiras de estilizar os componentes, uma delas é criando um arquivo .less ou .css ~~com somente os estilos dele~~ e importar-lo e o outro é com o [styled-jsx](https://github.com/zeit/styled-jsx) padrão do next. Exemplos:

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

OBS: Durante o processo de build o next unifica todos os arquivos importados de todas as páginas em um único arquivo css global que é colocado automaticamente em todas as páginas visitadas pelo usuário, então, deve-se ficar atento futuramente para o usuário não ter que carregar muitos bytes de css que ele não vai precisar.

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

Com esse método é possível modificar o css sempre que o componente for atualizado como mostrado acima. Além disso, diferente do outro jeito, o next só coloca esse estilo na página se o componente for solicitado pela renderização, isso é bom para evitar carregamento desnecessário de css que não será usado.

## Hospedagem

A Hospedagem fica por conta de [Netlify](https://www.netlify.com) que faz o deploy automático (Continuous deployment) a cada novo commit neste repositório remoto no Github e distribui os arquivos estáticos gerados pelo Next.js.

Fluxograma:
![Fluxograma da hospedagem](/static/images/Netlify_Flow_Chart.jpeg)

[Link do projeto na Netlify](https://app.netlify.com/sites/iagobruno-com).

OBS: O domínio ta registrado na Umbler.

## Lista de melhorias

- [ ] Escrever testes dos componentes usando Jest.
- [ ] Aprender a configurar o travis.
- [x] Documentar esse projeto pra praticar caso necessário futuramente.
- [x] Configurar o debugger do vs code. [ver mais](https://github.com/Microsoft/vscode-recipes/tree/master/Next-js)
- [x] Tirar uma foto profissional para colocar no cabeçalho.
- [ ] Enfeitar mais o topo do cabeçalho no mobile com aquela ideia lá.
- [x] [Habilitar o SSL no domínio](https://help.umbler.com/hc/pt-br/articles/201677189-Utilizando-SSL-na-Umbler#cf).
- [x] Adicionar tags para redes sociais.
- [x] Reorganizar a sessão habilidades.
- [x] Revisar o texto da sessão "sobre".
- [x] Adicionar onde moro em algum lugar do portifólio ("Ceará, Brasil").
- [x] Adicionar o Google Analytics.
- [x] Fazer uma versão compacta para celular.
- [ ] Habilitar a internacionalização da página (caso necessário futuramente).
- [x] Tentar transferir as funções do arquivo functions.js para seus respectivos componentes, quando eu nao tiver nada pra fazer. 
- [x] Usar o [Next](https://github.com/zeit/next.js/) ou o [react-static](https://github.com/nozzle/react-static) caso eu queira fazer um blog pessoal estático. 

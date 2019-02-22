/**
 * Arquivo responsável por gerar o feed rss do blog.
 */
const glob = require('glob')
const requireFromString = require('require-from-string')
const { promisify } = require('util')
const RSS = require('rss')
const path = require('path')
const fs = require('fs')

const debug = true
const site_url = 'https://www.iagobruno.com'

async function main() {
  log('Iniciando...')

  try {
    await getMDXFiles('./pages/posts')
      .then(getPostsList)
      .then(generateFeedRSS)
      .then(saveRSS)

    console.info('Feed RSS criado e salvo com sucesso!')
  }
  catch (err) {
    console.error('Erro ao criar feed RSS:', err)
  }
}

function log(...args: Array<any>) {
  if (debug) console.log('rss-feed:', ...args)
}

/**
 * Buscar arquivos .mdx de forma recursiva.
 */
async function getMDXFiles(dirPath: string = './pages/posts') {
  log('Buscando arquivos...')

  // Buscar arquivos 
  return await promisify(glob)(`${dirPath}/**/*.mdx`, {}) as Array<string>
}

/**
 * Transformar o array de caminhos de arquivos em um array de postagens com suas respectivas informações.
 */
async function getPostsList(arrayOfPostsPath: Array<string>) {
  const now = new Date()

  log('Analizando arquivos mdx...')

  return arrayOfPostsPath
    .map((filePath) => {
      let data: any = getPostData(filePath)
      return {
        ...data,
        publishDate: new Date(data.publishDate)
      }
    })
    // Só retornar posts já publicados no passado
    .filter(({ publishDate }) => {
      return (typeof publishDate !== 'undefined' && publishDate <= now)
    })
    // Ordenar por data de publicação
    .sort((a, b) => b.publishDate - a.publishDate) as Array<object>
}

/**
 * Buscar e retornar as informações do post na constante "meta" dentro do arquivo.
 */
function getPostData(filePath: string) {
  const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const result = RegExp('export const meta = (?<infos>\{(.|\n|\r)*(?!\}));', 'gim').exec(content)

  if (!result) {
    throw new Error(`Não foi possível pegar as informações do post: ${filePath}`);
  }

  // Basicamente esse comando vai transformar as infomações na string em formato de objeto
  return requireFromString(`module.exports = ${result.groups!.infos}`) as object
}

/**
 * Gerar um feed rss com a lista de posts recebida.
 * @see https://www.npmjs.com/package/rss
 */
async function generateFeedRSS(postsList: Array<any>) {
  log('Gerando feed rss...')

  const feed = new RSS({
    title: 'Blog pessoal de Iago Bruno',
    // description: '',
    site_url,
    language: 'pt-BR'
  })

  postsList.forEach(post => {
    let { title, publishDate, slug, summary } = post

    feed.item({
      title,
      date: publishDate,
      url: `${site_url}/posts/${slug}`,
      description: summary,
      author: 'Iago Bruno'
    })
  })

  return feed.xml({ indent: true }) as string
}

/**
 * Salvar o arquivo gerado.
 */
async function saveRSS(rssXML: string) {
  log('Salvando arquivo...')

  const path = './static/rss-feed.xml'
  const error = await promisify(fs.writeFile)(path, rssXML)

  if (error) throw new Error('Erro ao salvar arquivo. ' + error)

  return 'success'
}

// START!
main();

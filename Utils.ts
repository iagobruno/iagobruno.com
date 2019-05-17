import * as fs from 'fs'
import * as path from 'path'
import * as ReactGA from 'react-ga'
const glob = require('glob')
const readingTime = require('reading-time')
const sanitizeHtml = require('sanitize-html')
const uniqid = require('uniqid')


/**
 * Checar o se é um dispositivo móvel (se a tela é pequena)
 */
export const checkIsMobile = (): boolean => (window.innerWidth <= 859)

/**
 * Transformar uma função que usa callback em uma versão compatível com async/await.
 */
export function promisify(func: Function, args: any[], context: any = null): Promise<any> {
  return new Promise((resolve, reject) => {
    args.push(function (err: any, data: any) {
      if (err) reject(err);
      else resolve(data);
    })

    func.apply(context, args)
  })
}

/**
 * Buscar todas as postagens do blog ordenadas por data de publicação.
 */
export async function getAllPosts(limit: number = Infinity, fromCache: boolean = true): Promise<object[]> {
  if (fromCache) {
    return require('./posts-data.js');
  }

  const files: string[] = await promisify(glob, [`./pages/posts/**/*.mdx`])
  const now = new Date()

  return files
    .map((filePath) => {
      const rawContent = fs.readFileSync(filePath, { encoding: 'utf-8' })
      const cleanedContent = clearContent( rawContent )
      const data: any = getPostData(rawContent, filePath)
      const slug = path.basename(filePath, '.mdx')

      if (slug === '_example') return null;

      return {
        id: uniqid(),
        ...data,
        publishDate: new Date(data.publishDate),
        readingTime: readingTime( cleanedContent ).text.replace('read', 'de leitura'),
        path: `/posts/${slug}`,
        slug,
        filePath,
        fileName: slug
      }
    })
    // Só retornar posts válidos já publicados no passado
    .filter(data => {
      return data !== null && (typeof data.publishDate !== 'undefined' && data.publishDate <= now)
    })
    // Ordenar por data de publicação
    .sort((a, b) => b.publishDate - a.publishDate)
    // Limitar o número de resultados
    .slice(0, limit);

  /** Retornar as informações do post na constante "meta" dentro do arquivo. */
  function getPostData(rawContent: string, filePath?: string) {
    const result = RegExp('export const meta = (\{(.|\n|\r)*(?!\}));', 'gim').exec(rawContent)

    if (!result) {
      throw new Error(`Não foi possível pegar as informações do post: ${filePath}`);
    }

    return eval(`(${result[1]})`) as object
  }

  /** Remover todas as sintáxes JS e JSX do coneteúdo para o pacote "reading-time" gerar resultados mais pecisos */
  function clearContent(rawContent: string) {
    const treatedContent = rawContent
      .replace(/import .*(?=(\r|\n))/gi, '')
      .replace(/export const meta = (.|\n|\r)*;/gi, '')
      .replace(/export default .*(\;|\n|\r)/gi, '')

    return sanitizeHtml(treatedContent)
  }
}

/**
 * Enviar evento ao Google Analitycs sobre click em um link
 */
export function sendLinkClickToGA(url: string) {
  ReactGA.event({
    category: 'links',
    action: 'click',
    label: `Cliques em "${url}"`
  })
}

/**
 * Retorna o valor "transition-duration" do css do elemento.
 */
export function getTransitionDuration(element: HTMLElement): number {
  const val = window.getComputedStyle(element)
    .getPropertyValue('transition-duration')

  return Number( val.slice(0, -1) ) * 1000
}

/**
 * setTimeout as a Promise.
 */
export function sleep(delay: number): Promise<any> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  })
}

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

/**
 * Formatar data e hora em uma versão legível por humanos
 */
export function formateDate(date: Date | string): string {
  const d = !(date instanceof Date) ? new Date(date) : date
  const zero = (n: number) => ('0'+n).slice (-2)

  return `${zero(d.getDate())} de ${months[d.getMonth()]} de ${d.getFullYear()} às ${zero(d.getHours())}:${zero(d.getMinutes())}`
}
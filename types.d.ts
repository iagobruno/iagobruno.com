declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
declare module 'delegate';
declare module 'react-portal';

interface WorkItemType {
  /** Título do projeto */
  title: string;
  /** Tempo trabalhando no projeto, exemplo: 2012 - 2015 */
  subTitle: string;
  /** Link para o site */
  url?: string;
  /** Url do print do site */
  image: string;
  /** Descrião sobre o projeto */
  description: string;
  /** Tempo total de desenvolvimento até a entrega, exemplo: */
  totalDevelopmentTime?: string;
  /** Tecnologias usadas */
  technologies?: Array<string>;
}

interface PostMetaType {
  /** Título da postagem */
  title: string;
  /** Breve descrição para ser mostrado no Google e nas redes sociais. */
  summary: string;
  /** Data de publicação, exemplo: 2018-05-10T12:00:00Z */
  publishDate: string;
  /** Imagem de capa para ser mostrada nas redes sociais. */
  image?: string;
  /** Slug da postagem para ser adiciona no head da página */
  slug: string;
}

interface SkillItemType {
  title: string;
  percentage: number;
  color: string;
}

interface SlideItemType {
  src: string;
  alt: string;
}

interface LinkItemType {
  text: string;
  url: string;
}

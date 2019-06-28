export interface WorkItem {
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
  /** Tempo total de desenvolvimento até a entrega, exemplo: '2 meses' */
  totalDevelopmentTime?: string;
  /** Tecnologias usadas no desenvolvimento */
  technologies?: Array<string>;
}

export interface PostMeta {
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
  /** Url da postagem */
  path: string;
}

export interface SkillItem {
  title: string;
  percentage: number;
  color: string;
  description?: string;
  studying?: boolean;
}

export interface OthersSkillsItem {
  title: string;
  description?: string;
}

export interface SlideItem {
  src: string;
  alt: string;
}

export interface LinkItem {
  text: string;
  url: string;
}

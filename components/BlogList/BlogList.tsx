import React, { FunctionComponent, useState, useEffect } from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../common/functions'
import './BlogList.less'

type BlogListProps = {
  length?: number;
}

/**
 * Mostrar últimas postagens ao usuário
 *
 * @todo Fazer um sistema de paginação caso necessário futuramente
 */
const BlogList: FunctionComponent<BlogListProps> = ({ length = 3 }) => {
  const [latestPosts, setLatestPosts] = useState<Array<any>>([])

  useEffect(() => {
    getAllPosts(length).then(setLatestPosts)
  }, [length])

  return (
    <section className="blog-list" id="blog">
      <center>
        {length === 3 && (
          <Link href="/posts">
            <a className="blog-list__more-link" aria-label="Ver mais postagens">Ver mais</a>
          </Link>
        )}
        <h2 className="section__title">Últimas postagens</h2>

        <ul className="list list--3-cols" aria-label="Lista com as últimas postagens">
          {latestPosts.map(({ id, slug, title, image }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${slug}`}>
                  <a aria-label={title}>
                    <img className="list__thumb" src={image} alt={title} />
                    <div className="list__title list__title--centered">{title}</div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </center>
    </section>
  )
}

export default BlogList

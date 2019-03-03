import React, { useState, useEffect } from 'react'
import { getAllPosts } from '../../Utils'
import Link from 'next/link'

import './BlogList.less'

interface BlogListProps {
  length?: number;
}

/**
 * Mostrar últimas postagens ao usuário
 * 
 * @todo Fazer um sistema de paginação caso necessário futuramente
 */
export default function BlogList({ length = 3 }: BlogListProps) {
  const [latestPosts, setLatestPosts] = useState<Array<any>>([])

  useEffect(() => {
    getAllPosts(length).then(setLatestPosts)
  }, [])

  return (
    <section className="blog-list" id="blog">
      <center>
        {length === 3 && (
          <Link href="/posts">
            <a className="blog-list__more-link">Ver mais</a>
          </Link>
        )}
        <h2 className="section__title">Últimas postagens</h2>

        <ul className="list list--3-cols">
          {latestPosts.map(({ id, slug, title, image }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${slug}`}>
                  <a>
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

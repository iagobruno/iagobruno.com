import * as React from 'react'
import { getAllPosts } from '../../Utils'
import Link from 'next/link'

import './BlogList.less'

/**
 * Mostrar últimas postagens ao usuário
 */
export default function BlogList() {
  const [latestPosts, setLatestPosts] = React.useState<Array<any>>([])

  React.useEffect(() => {
    (async () => {
      const posts = await getAllPosts(3)
      setLatestPosts(posts)
    })()
  })

  return (
    <section className="blog-list" id="blog">
      <center>
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
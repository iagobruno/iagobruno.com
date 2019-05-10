import React, { FunctionComponent, useState, useEffect } from 'react'
import Link from 'next/link'
import readingTime from 'reading-time'
import { formateDate } from '../../Utils'

import SharePost from './SharePost'

type PostHeaderProps = {
  title: string;
  cover?: string;
  publishDate: Date | string;
  layout: 'default';
}

const PostHeader: FunctionComponent<PostHeaderProps> = ({ title, cover, publishDate, layout }) => {
  const formatedDate = formateDate(publishDate)
  const timeToRead = useReadingTime()

  return (
    <header className={`post__header post--${layout} ${cover && 'with-cover'}`}>
      <center>
        <div className="post__header__top">
          <h1 className="post__title">{title}</h1>
          {cover && (
            <img src={cover} className="post__cover" alt={title} />
          )}
        </div>
        <div className="post__header__bottom">
          <Link href="/">
            <a>
              <img className="post__avatar" src="https://avatars0.githubusercontent.com/u/3616259?s=60&v=4" alt="Iago Bruno" />
            </a>
          </Link>

          <div className="post__infos">
            <div className="post__author" aria-label={`Postado por Iago Bruno`} tabIndex={-1}>
              Postado por <Link href="/"><a>Iago Bruno</a></Link>
            </div>
            <div className="post__date" aria-label={`Postado em ${formatedDate}. ${timeToRead.replace('min', 'minutos')}`} tabIndex={-1}>
              Em{' '}
              <time dateTime={publishDate}>{formatedDate}</time>
              <span className="post__reading-time" title={timeToRead}>{' • ' + timeToRead}</span>
            </div>
          </div>

          <div>
            <SharePost mode="icon-only" />
          </div>
        </div>
      </center>
    </header>
  )
}

function useReadingTime() {
  const [val, setVal] = useState<string>('')

  useEffect(() => {
    const content = document.getElementsByClassName('post__content')[0].innerText
    const time = readingTime(content).text.replace('read', 'de leitura')

    setVal(time)
  }, [])

  return val
}

export default PostHeader
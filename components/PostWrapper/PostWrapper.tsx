import * as React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

interface PostWrapperProps extends PostMetaType {
  children: JSX.Element;
}

function PostWrapper({ title, children }: PostWrapperProps) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <article className="post__container">
        {children}
      </article>
    </React.Fragment>
  )
}

PostWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  summary: PropTypes.string,
  image: PropTypes.string
}

export default PostWrapper

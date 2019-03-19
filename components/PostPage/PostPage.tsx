import * as React from 'react'
import PropTypes from 'prop-types'

import SocialTags from '../SocialTags'
import PostHeader from './PostHeader'
import Header from '../Header/Header'
import PostFooter from './PostFooter'
import Footer from '../Footer/Footer'

import './PostPage.less'
import BlogList from '../BlogList/BlogList'

interface PostPageProps extends PostMetaType {
  children: JSX.Element;
}

/**
 * Componente que emgloba as páginas mdx e cria todo layout de postagem.
 */
export default function PostPage({ children, ...props }: PostPageProps) {
  return (
    <React.Fragment>
      <SocialTags
        page_title={props.title}
        url={`https://www.iagobruno.com/posts/${props.slug}`}
        description={props.summary}
        image={props.image}
      />

      <div className="page post-page">
        <Header mode="compact" />
        
        <article role="main">
          <PostHeader
            layout="default"
            title={props.title}
            cover={props.image}
            publishDate={props.publishDate}
          />

          <center className="post__content">{children}</center>

          <PostFooter />
        </article>

        <BlogList />
      </div>

      <Footer />
    </React.Fragment>
  )
}

PostPage.propTypes = {
  title: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  summary: PropTypes.string,
  image: PropTypes.string,
  slug: PropTypes.string.isRequired,
}

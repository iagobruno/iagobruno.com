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
  [key: any]: any;
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

      <Header mode="compact" />

      <article className="post-page" role="main">
        <PostHeader
          layout="default"
          title={props.title}
          cover={props.image}
          publishDate={props.publishDate}
        />

        <center className="post__content">{children}</center>

        <PostFooter />

        <BlogList />
      </article>

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

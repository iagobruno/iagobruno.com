import React, { FunctionComponent, Fragment, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { PostMeta } from '../../common/types'

import SocialTags from '../SocialTags'
import PostHeader from './PostHeader'
import Header from '../Header/Header'
import PostFooter from './PostFooter'
import BlogList from '../BlogList/BlogList'
import Footer from '../Footer/Footer'
import './PostPage.less'


interface PostPageProps extends PostMeta {
  children: ReactNode;
}

/**
 * Componente que emgloba as páginas mdx e cria todo layout de postagem.
 */
const PostPage: FunctionComponent<PostPageProps> = ({ children, ...props }) => {
  return (
    <Fragment>
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
    </Fragment>
  )
}

// PostPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   publishDate: PropTypes.string.isRequired,
//   summary: PropTypes.string,
//   image: PropTypes.string,
//   slug: PropTypes.string.isRequired,
// }

export default PostPage

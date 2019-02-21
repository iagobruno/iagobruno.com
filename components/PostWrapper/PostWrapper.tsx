import * as React from 'react'
import PropTypes from 'prop-types'

import SocialTags from '../SocialTags'

interface PostWrapperProps extends PostMetaType {
  children: JSX.Element;
}

function PostWrapper({ children, ...props }: PostWrapperProps) {
  return (
    <React.Fragment>
      <SocialTags
        page_title={props.title}
        url={`https://www.iagobruno.com/posts/${props.slug}`}
        description={props.summary}
        image={props.image}
      />

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
  image: PropTypes.string,
  slug: PropTypes.string.isRequired,
}

export default PostWrapper

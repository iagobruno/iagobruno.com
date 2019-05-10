import React, { FunctionComponent } from 'react'
import SharePost from './SharePost'

const PostFooter: FunctionComponent = () => {
  return (
    <footer>
      <center>
        <div className="post__footer__block-title">Compartilhar</div>
        <SharePost mode="buttons" />
      </center>
    </footer>
  )
}

export default PostFooter
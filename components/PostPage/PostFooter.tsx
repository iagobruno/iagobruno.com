import * as React from 'react'
import SharePost from './SharePost'

export default function PostFooter() {
  return (
    <footer>
      <center>
        <div className="post__footer__block-title">Compartilhar</div>
        <SharePost mode="buttons" />
      </center>
    </footer>
  )
}
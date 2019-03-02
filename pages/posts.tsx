import * as React from 'react'
import Header from '../components/Header/Header';
import BlogList from '../components/BlogList/BlogList';
import Footer from '../components/Footer/Footer';

export default function PostsPage() {
  return (
    <div className="posts-list-page">
      <Header mode="compact" />

      <BlogList length={Infinity} />

      <div style={{ textAlign: 'center', fontSize: 16, paddingBottom: 30 }}>
        <a href="/static/rss-feed.xml">Feed rss</a>
      </div>

      <Footer />
    </div>
  )
}

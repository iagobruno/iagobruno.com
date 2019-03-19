import * as React from 'react'
import Head from 'next/head'

interface SocialTagProps {
  page_title: string,
  description: string,
  url: string,
  image?: string,
}

export default function SocialTags({ url, page_title, description, image }: SocialTagProps) {
  return (
    <Head>
      <title>{`${page_title} — Iago Bruno`}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={page_title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Iago Bruno" />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@unsolvedversion" />
      <meta name="twitter:creator" content="@unsolvedversion" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={page_title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}

SocialTags.defaultProps = {
  image: "https://www.iagobruno.com/static/images/website-print.jpg"
}

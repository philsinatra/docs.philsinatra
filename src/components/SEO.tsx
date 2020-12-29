import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

interface SeoProps {
  description?: string
  title: string
  url?: string
}

const SEO = ({ description, title, url }: SeoProps) => {
  const router = useRouter()
  const siteUrl = 'https://docs.philsinatra.com'
  const defaultTitle = "Phil's Notes"

  const seo = {
    title: `${title} | ${defaultTitle}` || defaultTitle,
    description:
      description ||
      `My notes about ${title === 'Hello World' ? 'everything' : title}`,
    url: `${siteUrl}${router.pathname}` || url,
  }
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={seo.title} />
      <meta
        name="og:description"
        property="og:description"
        content={seo.description}
      />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {/* <meta name="twitter:site" content="@philsinatra" /> */}
      <meta name="twitter:creator" content="@philsinatra" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      {/* TODO: SEO Images */}
      <meta property="og:image" content="" />
      <meta name="twitter:image" content="" />
      <link rel="canonical" href={seo.url} />
    </Head>
  )
}

export default SEO

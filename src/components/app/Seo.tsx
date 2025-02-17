import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

// SEO Component Resource: https://www.gatsbyjs.com/docs/add-seo-component/ 

interface SeoProps {
  title: string,
  description: string,
  image?: string,
  lang?: string,
  keywords?: string[]
}

interface SeoMeta {
  title: string,
  description: string,
  image: {
    src: string,
    width: number,
    height: number
  },
  url: string,
  keywords: string[],
  lang: string
}

const Seo = ({ title, description, image, lang, keywords }: SeoProps) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    metaImage,
    defaultKeywords,
    defaultLang
  } = site.siteMetadata

  const seo: SeoMeta = {
    title: title ? `${title} - ${titleTemplate}` : defaultTitle,
    description: description || defaultDescription,
    image: {
      src: `${siteUrl}${image || metaImage.src}`,
      width: metaImage.width,
      height: metaImage.height
    },
    url: `${siteUrl}${pathname} `,
    keywords: keywords || defaultKeywords,
    lang: lang || defaultLang
  }

  return (
    <Helmet htmlAttributes={lang}>
      <title>{seo.title}</title>
      <meta name="og:title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="keywords" content={seo.keywords.join(", ")} />
      <meta name="twitter:image" content={seo.image.src} />
      <meta name="og:image" content={seo.image.src} />
      <meta name="og:image:width" content={`${seo.image.width}`} />
      <meta name="og:image:height" content={`${seo.image.height}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    </Helmet>
  )
}

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article: PropTypes.bool,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
      defaultTitle: title
      titleTemplate
      defaultDescription: description
      siteUrl: url
      defaultLang: lang
      defaultKeywords: keywords
      metaImage: image  {
        height
        src
        width
      }
    }
  }
}
`
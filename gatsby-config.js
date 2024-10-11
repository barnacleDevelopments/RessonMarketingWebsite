require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    url: "https://resson.com/",
    title: "Resson",
    image: {
      src: `assets/resson_logo_inline.svg`,
      width: 110,
      height: 110
    },
    titleTemplate: "Resson",
    defaultTitle: "Resson",
    description: "",
    lang: "en",
    keywords: [
      "Commercial",
      "Ag Supply",
      "crop transitions",
      "crop storage",
      "crop sequence",
      "continuous supply",
      "Crop Insights",
      "Reduce Waste",
      "Improved Operation"
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
      },
    },
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: `gatsby-remark-images`,
            options: {},
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\_inline\.svg$/ /// See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DEV'S WEB SHOP`,
        short_name: `DEV'S SHOP`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#30362F`,
        display: `standalone`,
        icon: "src/images/resson_favicon.svg",
        description: "Web development services for small business and startups. Get in touch!"
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        directives: {
          "script-src": "'self' 'unsafe-inline' 'unsafe-eval' google-analytics.com pagead2.googlesyndication.com adservice.google.ca adservice.google.com partner.googleadservices.com tpc.googlesyndication.com",
          "style-src": "'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com",
          'font-src': "fonts.gstatic.com",
          'connect-src': "'self' pagead2.googlesyndication.com",
          'frame-src': "googleads.g.doubleclick.net www.google.com tpc.googlesyndication.com",
          'img-src': "'self' data: pagead2.googlesyndication.com"
          // you can add your directives or override defaults
        }
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://resson.com/',
        sitemap: 'https://resson.com/sitemap.xml',
        policy: [{ userAgent: 'Mediapartners-Google*', allow: '/' }]
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-typescript`,
    },
  ],
};

const siteMetadata = require('./content/settings/sitemetadata/index.json');

module.exports = {
  siteMetadata: {
    ...siteMetadata
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/settings/header`,
        name: `header`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/settings/footer`,
        name: `footer`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/stories`,
        name: `story`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/activities`,
        name: `activity`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/team`,
        name: `team`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/home`,
        name: `home`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages/about`,
        name: `about`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/settings/tags`,
        name: `tags`
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            output: '/rss.xml',
            title: "Open Knowledge Belgium's RSS Feed",
            query: `
            {
              allMarkdownRemark(
                filter: { fields: { collection: { eq: "story" } } }
                sort: { fields: frontmatter___date, order: DESC }
              ) {
                edges {
                  node {
                    frontmatter {
                      title
                      date(formatString: "LL")
                      author
                      tags
                    }
                    excerpt(pruneLength: 304)
                    html
                    fields {
                      slug
                    }
                  }
                }
              }
            }`
          }
        ]
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     display: 'standalone',
    //     icon: 'src/images/logo/okbe.svg'
    //   }
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms`
      }
    },
    `gatsby-plugin-styled-components`,
    { resolve: `gatsby-plugin-sitemap`, options: { sitemapSize: 5000 } }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`
  ],
  mapping: {
    'MarkdownRemark.frontmatter.stories.featured_stories': `MarkdownRemark.fields.o_slug`,
    'MarkdownRemark.frontmatter.activities.featured_activities': `MarkdownRemark.fields.o_slug`
  }
};

require("dotenv").config({
  path: `.env`,
});

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://favorit-chekhov.ru',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    title: `Агенство недвижимости "ФАВОРИТ" - Чехов`,
    description: `⭐⭐⭐⭐⭐Покупка и продажа квартир, домов, участков, аренда жилой и коммерческой недвижимости. Выплата до 90% рыночной стоимости. Команда экспертов. Юридическое сопровождение. Работаем в Чехове и Чеховском районе.`,
    keywords: `агентство, недвижимость, агентство недвижимости, квартиры чехов, купить квартиру чехов, продать квартиру чехов, аренда квартир чехов, коммерческая недвижимость чехов, купить дом чехов, купить дачу чехов, купить участок чехов, купить недвижимость чехов, недвижимость чехов, нежилая недвижимость чехов, купить дом чеховский район, купить квартиру чеховский район, продать дом чеховский район, продать квартиру чеховский район, купить дачу чеховский район, продать дачу чеховский район, купить участок чеховский район, продать участок чеховский район`,
    author: `@dmitrykomkov`,
    siteUrl: `https://favorit-chekhov.ru`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-emotion`
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto', 'Roboto:100,300,500,700,900']
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL || `http://localhost:1337`,
        collectionTypes: [
          `experts`,
          `categories`,
          `realties`
        ],
        singleTypes: [`general`],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`, `auto`],
          quality: 90,
        },
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: 88597642,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: true,
        useCDN: true,
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: [
          '/404/',
          '/404.html',
          '/dev-404-page/',
        ],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({allSitePage: {nodes: allPages}}) => {
          return allPages.map(page => {
            return {...page}
          })
        },
        serialize: ({path}) => {
          return {
            url: path,
            changefreq: `daily`,
            priority: 0.9,
          }
        }
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [
              {
                userAgent: "*",
                allow: ["/", "/*"],
                disallow: ["/admin", "/public", "/static", "/page-data", "/?*"],
              },
              {
                userAgent: "Googlebot",
                allow: ["/", "/*"],
                disallow: ["/admin", "/public", "/static", "/page-data", "/?*"],
              },
              {
                userAgent: "Yandex",
                allow: ["/", "/*"],
                disallow: ["/admin", "/public", "/static", "/page-data", "/?*"],
              },
            ],
            host: siteUrl,
            sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

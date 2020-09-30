module.exports = {
  pathPrefix: `/aestudio`,
  siteMetadata: {
    siteUrl: `https://aestudio.at/`,
    title: `AE Studio`,
    description: `Kreative Raumgestaltung und Planung`,
    author: `@aestudio`,
    ogImage: `${__dirname}/static/og_default.jpg`,
  },
  plugins: [
    `gatsby-plugin-cname`,
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        https: true,
        www: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `privacy`,
        path: `${__dirname}/src/legal/privacy.md`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `terms`,
        path: `${__dirname}/src/legal/terms.md`,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`de`, `en`],
        defaultLanguage: `de`,
        redirect: false,
        redirectComponent: require.resolve(`./src/components/helper/redirect.js`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AE Studio`,
        short_name: `AE Studio`,
        description: `Kreative Raumgestaltung und Planung.`,
        start_url: `/`,
        lang: `de`,
        background_color: `#EFEFEF`,
        theme_color: `#06233D`,
        display: `minimal-ui`,
        icon: `${__dirname}/static/app-icon.png`, // This path is relative to the root of the site.
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `AE Studio`,
            short_name: `AE Studio`,
            description: `Creative interior design and planning.`,
          },
        ],
      },
    }
  ],
}

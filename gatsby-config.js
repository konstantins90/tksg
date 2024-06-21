/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Turn Key Solar GmbH – Ihr Experte für Photovoltaik-Anlagen in Paderborn`,
    description: `Turn Key Solar GmbH - Ihr Experte für Photovoltaik-Anlagen in Paderborn. Mit über 251 installierten Anlagen und 95.682 kWp produzierter Leistung bieten wir maßgeschneiderte Lösungen für private und gewerbliche Kunden. Vertrauen Sie auf unsere langjährige Erfahrung und unseren umfassenden Service für erneuerbare Energien`,
    image: `/android-chrome-512x512.png`,
    siteUrl: `https://turnkey-solar.de/`,
  },
  flags: {
    DEV_SSR: false
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `src/data`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ]
}

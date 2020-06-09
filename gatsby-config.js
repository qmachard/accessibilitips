require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `AccessibiliTips`,
    description: `Non, l’accessibilité web n’est pas « chère et complexe ». Voyons ensemble quelques pistes d’améliorations, simples à mettre en œuvre sur vos sites internet 👍`,
    author: `@accessibilitips`,
  },
  plugins: [
    `gatsby-plugin-sass`,
  ],
}

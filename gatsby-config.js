module.exports = {
  siteMetadata: {
    title: `Jean CS`,
    name: `Website and Blog`,
    siteUrl: `https://jeancs.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Welcome to Novela, the simplest way to start publishing with Gatsby.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Jean_CSx`,
      },
      {
        name: `github`,
        url: `https://github.com/Jean-CS`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jean.santos37`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/jean-santos-dev/`,
      },
      {
        name: `resume`,
        url: `https://jeancs.com/resume`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};

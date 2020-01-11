// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@bhws/gridsome-source-craft-graphql',
      options: {
        url: process.env.GRIDSOME_CRAFT_GRAPHQL_ENDPOINT, // Create a Craft demo at https://demo.craftcms.com/
        fieldName: 'craft',
        typeName: 'craft',
        livePreview: process.env.CRAFT_LIVE_PREVIEW || false, // Use false in production
        // headers: {
        //   Authorization: `Bearer ${process.env.CRAFT_GRAPHQL_AUTH_TOKEN}`,
        // },
      }
    }
]
}

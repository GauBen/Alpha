const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/**/*.{png,jpg,pdf,webp}')
  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.addCollection('sortedClubs', collectionApi => {
    return collectionApi.getFilteredByTag('club').sort(function (a, b) {
      return 2 * Number(a.data.name.toLowerCase() > b.data.name.toLowerCase()) - 1
    })
  })

  eleventyConfig.setBrowserSyncConfig({
    ui: false,
    server: {
      baseDir: '_dist'
    }
  })

  return {
    dir: {
      input: 'pages'
    },
    markdownTemplateEngine: 'njk'
  }
}

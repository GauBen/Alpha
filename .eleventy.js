const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/**/*.{png,jpg,pdf,webp}')
  eleventyConfig.setDataDeepMerge(true)
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

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

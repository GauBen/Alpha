module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/**/*.{png,jpg,pdf,webp}')
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.setBrowserSyncConfig({
    server: {
      baseDir: "_dist"
    }
  })

  return {
    dir: {
      input: 'pages'
    }
  }
}

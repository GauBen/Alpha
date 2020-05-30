module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/**/*.{png,jpg,pdf,webp}')
  eleventyConfig.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src'
    }
  }
}

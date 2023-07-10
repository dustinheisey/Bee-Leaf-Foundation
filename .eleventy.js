const common = require('@dh253/nds')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(common, {
    domain: 'https://beeleaf.dustinheisey.com',
    manifest: {
      name: 'BeeLeaf Foundation - Championing the Survival of Bees',
      short_name: 'BeeLeaf Foundation',
      description:
        'BeeLeaf Foundation is a passionate advocate for bee conservation. Through education, habitat preservation, and policy advocacy, we’re building a future where bees flourish.',
      theme_color: '#745b00',
      background_color: '#14100F',
    }
  })
}

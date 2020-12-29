const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const pathMap = require('./scripts/pathMap')

const MDXPlugin = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
})

module.exports = withPlugins([MDXPlugin], {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return pathMap
  },
})

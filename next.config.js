const withPlugins = require('next-compose-plugins')
const productionPrefix = '/branches/nextjs'
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions: ['js', 'jsx', 'mdx', 'tsx'],
    }),
  ],
  { basePath: process.env.NODE_ENV === 'production' ? productionPrefix : '' }
)

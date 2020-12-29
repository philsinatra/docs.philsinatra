const fs = require('fs')
const path = require('path')
const slugify = require('slugify')

const rawdata = fs.readFileSync(
  path.join(__dirname, '../src/data/', 'pages.json')
)
let data = JSON.parse(rawdata)
let output = `module.exports = { '/': { page: '/' },`

data.pages.forEach(topic => {
  topic.items.forEach(item => {
    let path = slugify(item.toLowerCase())
    output += `'/${path}': { page: '${path}' },`
  })
})

output += '}'

fs.writeFile(path.join(__dirname, './', 'pathMap.js'), output, function (err) {
  if (err) return console.log(err)
  console.log('✨ pathMap generated successfully')
})

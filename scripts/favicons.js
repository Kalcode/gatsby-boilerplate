var rimraf = require('rimraf')
var path = require('path')
var fs = require('fs-extra')
var favicons = require('favicons')

const root = path.resolve(__dirname, '..')
const source = path.join(root, 'static', 'favicon.png')
var options = {
  appName: null,
  appDescription: null,
  developerName: null,
  developerURL: null,
  background: '#fff',
  path: '/favicons',
  display: 'standalone',
  orientation: 'portrait',
  start_url: '/?homescreen=1',
  version: '1.0',
  logging: false,
  online: false,
  preferOnline: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: { offset: 25 },
    favicons: true,
    firefox: true,
    windows: true,
    yandex: false,
  },
}

console.log('Generating Favicons')
rimraf.sync(path.join(root, 'public', 'favicons'))
fs.mkdirSync(path.join(root, 'public', 'favicons'))

favicons(source, options, (error, response) => {
  if (error) return console.error(error)

  const { images } = response
  const promises = []
  promises.push(images.map(write))

  Promise.all(promises).then(() => {
    console.log('Done Faviconing')
  })
})

function write({ name, contents }) {
  return new Promise((resolve, reject) => {
    const full = path.join(root, 'public', 'favicons', name)
    if (name === 'favicon.ico') fs.writeFileSync(path.join(root, 'public', name), contents)
    fs.writeFile(full, contents, (error) => {
      if (error) return reject(error)
      resolve()
    })
  })
}

const root = require('./electron-api')
const gen = require('./gen-electron-class')
const fs = require('fs')

const names = {
  BrowserWindow: true,
  MenuItem: true,
  Menu: true,
  NativeImage: true,
  WebContents: true
}

for (const obj of root.filter(n => n.name in names)) {
  console.log(`Making ${obj.name}`)
  fs.writeFileSync(`src/com/oscuro/oscurojs/electron/${obj.name}.kt`, gen(obj))
}
console.log('Done')

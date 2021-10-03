const path = require('path')
const {readdirSync} = require('fs')

function GetFileNames (dir) {
    const filenames = readdirSync(dir)
    const filtered = filenames.filter(filename => filename.endsWith('.js'))
    return filtered
}

function GetFiles (dir) {
    const filenames = GetFileNames(dir)
    const files = filenames.map(filename => require(path.join(dir, filename)))
    return files
}

module.exports = {
    GetFileNames,
    GetFiles, 
}

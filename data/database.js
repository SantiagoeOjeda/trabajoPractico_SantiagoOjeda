const fs = require('fs')

let database =JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'))

 module.exports = database
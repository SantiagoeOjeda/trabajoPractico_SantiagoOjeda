let database = require('../data/database')


const controller = {
    index: function(req, res) {
        res.write("Bienvenidos al HOME \n")
        res.write('-------------------------------------------\n')
        res.write('Sucursales: \n')
        database.forEach(consecionaria=>{
            res.write(consecionaria.sucursal + '\n')
        })
        res.end()
    }
}

module.exports = controller
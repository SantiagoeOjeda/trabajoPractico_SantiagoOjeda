let database = require('../data/database')

module.exports = controller = {
    index: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.write("Sucursales de nuestra concesionaria:\n")
        res.write("--------------------------------------------------------------------------------------------\n")
        database.forEach(consecionaria=>{
            res.write(consecionaria.sucursal + '\n\n')
            res.write(consecionaria.direccion + '\n')
            res.write(consecionaria.telefono + '\n\n')
            res.write('-------------------------------------------------------------------------------------------\n')
        })
        res.end()
    },
    sucursal: function(req, res){
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let sucId = req.params.id
        database.forEach(consecionaria=>{
            if(consecionaria.sucursal.toLowerCase() == sucId.toLowerCase()){
                res.write(consecionaria.sucursal + '\n')
                res.write("-------------------------------------------------------------------------------------------------------\n")
                res.write('Direccion: ' + consecionaria.direccion + '\n\n')
                res.write('Telefono: ' + consecionaria.telefono + '\n\n')
                res.write('Autos de la sucursal:\n\n')
                consecionaria.autos.forEach(auto=>{
                    res.write(auto.marca + ' - ' + auto.modelo + ' ' + auto.anio + ' - ' + auto.color +  '\n')
                })
                res.write('---------------------------------------------------------------------------------------------------------\n')
                res.end('Cantidad de autos disponibles en nuestra sucursal: ' + consecionaria.autos.length)
            }
        })
        res.end('No contamos con esa sucursal')
    }
}
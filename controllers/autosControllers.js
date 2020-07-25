let database = require('../data/database');

const controller = {
    index: function(req, res) {
        res.write("Estos son los autos de nuestra concesionaria\n\n")
        database.forEach(consecionaria => {
            res.write(consecionaria.sucursal + '\n\n')
          consecionaria.autos.forEach(auto =>{
            res.write(auto.marca + ' - ' + auto.modelo +  + '\n' + auto.anio + ' - ' + auto.color + '\n')
            })
        })
        res.end()
    },
    vehiculo: function(req, res) {
        let autId = req.params.id
        let dato = req.params.dato
        database.forEach(consecionaria => {
            consecionaria.autos.forEach(auto=>{
                if(auto.marca == autId){
                    if(dato == auto.color) {
                        res.write('Marca: \n-------------------------------------------\n')
                        res.write(auto.marca +'\n\n')
                        res.write(auto.color + '\n\n')
                        res.end()
                    }else if(dato == auto.anio){
                        res.write('Marca: \n-------------------------------------------\n')
                        res.write(auto.marca +'\n\n')
                        res.write(auto.anio + '\n\n')
                        res.end()
                    }else{
                        res.send(auto.marca + ' - ' + auto.modelo + '\n' + auto.anio + '\n' + auto.color)
                    }
                }
            })
        })
        res.send('No se ha enontrado la marca requerida')
    }
}

module.exports = controller
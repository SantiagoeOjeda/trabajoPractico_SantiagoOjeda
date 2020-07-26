let database = require('../data/database');

const controller = {
    index: function(req, res) {
        res.write("Estos son los autos de nuestra concesionaria\n\n")
        database.forEach(consecionaria => {
            res.write('--------------------------------------------------------- \n' + consecionaria.sucursal + '\n---------------------------------------------------------\n')
          consecionaria.autos.forEach(auto =>{
            res.write(auto.marca + ' - ' + auto.modelo + ' - ' + auto.color + ' ' + auto.anio + '\n')
            })
        })
        res.end()
    },
    vehiculo: function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        let autId = req.params.id
        let dato = req.params.dato
        database.forEach(consecionaria => {
            consecionaria.autos.forEach(auto=>{
                if(auto.marca == autId){
                    if(dato == auto.color) {
                        res.write('Auto: \n-------------------------------------------\n' + auto.marca + '\n\n' + auto.modelo + '\n\n' + auto.color + '\n------------------------------------------')
                        res.end()
                    }else if(dato == auto.anio){
                        res.write('Auto: \n-------------------------------------------\n' + auto.marca +'\n\n' + auto.anio + '\n\n')
                        res.end()
                        
                    }else{ 
                        res.write('AUTO:\n----------------\n' + auto.marca + ' - ' + auto.modelo + '\n' + auto.anio + '\n' + auto.color + '\n\n')               
                    }
                }
            })
        })  
        res.end()
    },
}  

module.exports = controller
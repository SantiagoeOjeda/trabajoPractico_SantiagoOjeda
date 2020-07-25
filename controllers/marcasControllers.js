let database = require('../data/database');

const controller = {
    index: function (req, res) {
        res.write("Estas son las marcas de nuestra concesionaria\n\n")
        database.forEach(consecionaria => {
          consecionaria.autos.forEach(auto =>{
            res.write(auto.marca + '\n')
            })
        })
        res.end()
    },
    autoMarca: function(req, res) {
        let marId = req.params.id
        database.forEach(consecionaria =>{
            consecionaria.autos.forEach(auto=>{
                if(auto.marca == marId){
                    res.write('MARCA: \n')
                    res.write(auto.marca + '\n')
                    res.write(auto.modelo + '\n')
                    res.write(auto.anio + '\n')
                    res.end()
                }
            })
        })
        res.write('No encontramos esta marca')
        res.end()    
    }
}

module.exports = controller
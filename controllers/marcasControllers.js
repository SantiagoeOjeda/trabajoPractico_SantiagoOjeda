let database = require('../data/database');

const controller = {
    index: (req, res) => {
        let listaDeMarcas = [];
        res.write("Nuestras Marcas" + "\n");
        res.write("----------------  \n");
        database.forEach(sucursal => {
            sucursal.autos.forEach(auto =>{
                listaDeMarcas.push(auto.marca);
            });
        });
        let marcasUnicas = Array.from(new Set(listaDeMarcas));
        marcasUnicas.forEach(autoMarca =>{
            res.write("\n * " +  autoMarca);
        });
        let cantidadAutos = marcasUnicas.length;
        res.write("\n \n" + "----------------------------------  \n");
        res.write("Marcas totales: " + cantidadAutos);
        res.end();
    },
    autoMarca: function(req, res) {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
            let idMarca = req.params.id
            database.forEach(concesionaria =>{
                concesionaria.autos.forEach(marcas => {
                    if(marcas.marca == idMarca){
                    res.write('Auto: ')
                    res.write(marcas.marca + ' - ' + marcas.modelo + ' - ' + marcas.color + ' ' + marcas.anio + '\n\n-------------------------------------------------------------\n')
                    }
                })
            })
            res.end()
    }
}

module.exports = controller
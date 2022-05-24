const { Router } = require('express');
const router = Router();
const _= require('underscore');
const peliculas = require('../ejemplos.json');

// Ruta principal
router.get('/', (req, res) => {
    res.json(peliculas);
})


router.put('/:nombre', (req, res) => {
    const {nombre} = req.params;
    const {año,genero} = req.body;

    if(año && genero){
        _.each(peliculas,(pelicula,i)=>{
            if(pelicula.nombre == nombre){
                pelicula.año = año;
                pelicula.genero = genero;
            }
        })

        res.json(peliculas);
    }else{
        res.status(500).json({error:"Ha ocurrido un error"});
    }

})

router.post('/', (req, res) => {
    const { nombre, año, genero } = req.body;
    if (nombre && año && genero) {
        const id = peliculas.length + 1;
        const newPelicula = { ...req.body, id }
        peliculas.push()
        peliculas.push(newPelicula);
        res.json(peliculas);
    } else {
        // res.send('Error, existen datos nulos o inexistentes.')
        // res.json({"error":"Hay un error"})
        res.status(500).json({ error: "Ha ocurrido un error" });
    }
});

// Error aqui, npm run dev
router.delete('/:nombre', (req, res) => {
    const { nombre } = req.params;
    _.each(peliculas, (pelicula, i) => {
        if (pelicula.nombre == nombre) {
            peliculas.splice(i, 1);
        }
    });

    res.json(peliculas)
})

module.exports = router;
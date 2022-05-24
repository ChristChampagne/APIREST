const { Router } = require('express');
const router = Router();



// Ruta principal
router.get('/',(req,res)=>{
    // Send envia un texto, json un json.
    // res.send("Hola mundo");
    const data = {
        "nombre":"Christian",
        "Web":"No disponible"
    }

    res.json(data);
})

module.exports = router;
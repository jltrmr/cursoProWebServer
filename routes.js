const express = require('express')

function escucha(app){
    const router = express.Router()
    app.use('/api',router)

    router.get('/datos',async function(req, res, next){
        try{
            res.status(200).json({
                'nombre':'José Luis Torres Rodríguez',
                'telefono':'3411003391',
                'email':'jose.tr1@tlajomulco.tecnm.mx'
            })
        }catch(error){
            console(error)
        }
    })
}

module.exports = escucha
const express = require('express')
const usuarios = require('./users')

function escucha(app){
    const router = express.Router()
    app.use('/api',router)
    const misUsuarios = new usuarios()

    router.get('/data',async function(req, res, next){
        try{
            const users = misUsuarios.getUsuarios(req, query)
            res.status(200).json({
                'usuarios' : users
            })
        }catch(error){
            console(error)
        }
    })
}

module.exports = escucha
const users = require('./mongo')

class usuarios{
    constructor(){
        this.collection ='users'
        this.mongoDB = new users()
    }
    async getUsuarios(query){
        const usuarios = await this.mongoDB.getAll(this.collection, query)
        return usuarios || {}
    }
    async getUsuario(){

    }
    async insertUsuario(usuario){

    }
    async updateUsuario(usuarioOld, usuarioNew){

    }
}

module.exports = usuarios
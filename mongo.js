const{MongoClient, ObjectId} = require('mongodb')

const DB_HOST = 'localhost'
const DB_PORT = '27017'
const DB_NAME = 'users'

const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`

class Mongo{
    constructor(){
        this.client = new MongoClient(MONGO_URI,{useNewUrlParser : true})
    }
    connect(){
        if(!Mongo.connection){
            Mongo.connection = new Promise((resolve, reject)=>{
                this.client.connect(err => {
                    if (err) reject(err)
                    console.log('Se conecto a BD')
                    resolve(this.client.db())
                })
            })
        }
    }
    getAll(collection, query){
        return this.connect().then(db=>{
            return db.collection(collection).find(query).toArray()
        })
    }
    getOne(collection, query){

    }
    insert(collection, query){

    }
    update(collection, oldDocument, newDocument){

    }
}

module.exports = Mongo
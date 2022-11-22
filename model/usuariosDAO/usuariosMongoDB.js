import CnxMongoDB from '../DB.js'
import { ObjectId } from "mongodb"


class UsuariosMongoDAO {

    findUsuario = async id => {
        if(!CnxMongoDB.connection) return {}
        let usuario = await CnxMongoDB.db.collection('usuarios').findOne({_id: ObjectId(id)})
        return usuario    
    }

    findUsuarios = async ()  => {
        if(!CnxMongoDB.connection) return []
        try {
            let usuarios = await CnxMongoDB.db.collection('usuarios').find({}).toArray()
            return usuarios
        }
        //catch(err) {
        catch {
            return []
        }
    }

    saveUsuario = async usuario => {
        if(!CnxMongoDB.connection) return {}

        await CnxMongoDB.db.collection('usuarios').insertOne(usuario)
        return {status: 'OK'}      
    }
}

export default UsuariosMongoDAO

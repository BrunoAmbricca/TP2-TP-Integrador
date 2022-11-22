import express from 'express'
import ControladorUsuarios from '../controller/usuarios.js'


export class RouterUsuarios {
    constructor() {
        this.router = express.Router()
        this.controladorUsuarios = new ControladorUsuarios()
    }

    start() {
        this.router.get('/:id?', this.controladorUsuarios.getUsuarios)
        this.router.post('/', this.controladorUsuarios.postUsuario)
        this.router.put('/', this.controladorUsuarios.putUsuario)
        this.router.delete('/', this.controladorUsuarios.deleteUsuario)
        
        return this.router
    }
}

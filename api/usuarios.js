import config from '../config.js'
import UsuariosFactoryDAO from '../model/usuariosDAO/usuariosFactory.js'


class ApiUsuarios {
    constructor() {
        this.usuariosModel = UsuariosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerUsuarios = async id => {
        return id? await this.usuariosModel.findUsuario(id) : await this.usuariosModel.findUsuarios()
    }

    guardarUsuario = async usuario => {
        return await this.usuariosModel.saveUsuario(usuario)
    }

    actualizarUsuario = async (usuario,id) => {
        return await this.usuariosModel.updateUsuario(usuario,id)
    }

    eliminarUsuario = async id => {
        return await this.usuariosModel.deleteUsuario(id)
    }
}

export default ApiUsuarios
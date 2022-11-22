import ApiUsuarios from '../api/usuarios.js'


class ControladorUsuarios {

    constructor() {
        this.apiUsuarios = new ApiUsuarios()
    }

    getUsuarios = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiUsuarios.obtenerUsuarios(id) )
    }

    postUsuario = async (req,res) => {
        const usuario = req.body
        res.json(await this.apiUsuarios.guardarUsuario(usuario))
    }

    putUsuario = async (req,res) => {
        const { id } = req.params
        const usuario = req.body
    
        res.json(await this.apiUsuarios.actualizarUsuario(usuario,id))
    }

    deleteUsuario = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.apiUsuarios.eliminarUsuario(id))
    }
}

export default ControladorUsuarios
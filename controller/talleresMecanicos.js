import ApiTalleresMecanicos from '../api/talleresMecanicos.js'


class ControladorTalleresMecanicos {

    constructor() {
        this.apiTalleresMecanicos = new ApiTalleresMecanicos()
    }

    getTalleresMecanicos = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiTalleresMecanicos.obtenerTalleresMecanicos(id) )
    }

    postTallerMecanico = async (req,res) => {
        const tallerMecanico = req.body
        res.json(await this.apiTalleresMecanicos.guardarTallerMecanico(tallerMecanico))
    }

    putTallerMecanico = async (req,res) => {
        const { id } = req.params
        const tallerMecanico = req.body
    
        res.json(await this.apiTalleresMecanicos.actualizarTallerMecanico(tallerMecanico,id))
    }

    deleteTallerMecanico = async (req,res) => {
        const { id } = req.params
    
        res.json(await this.apiTalleresMecanicos.eliminarTallerMecanico(id))
    }
}

export default ControladorTalleresMecanicos
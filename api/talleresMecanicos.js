import config from '../config.js'
import TalleresMecanicosFactoryDAO from '../model/talleresMecanicosDAO/talleresMecanicosFactory.js'


class ApiTalleresMecanicos {
    constructor() {
        this.talleresMecanicosModel = TalleresMecanicosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerTalleresMecanicos = async id => {
        return id? await this.talleresMecanicosModel.findTallerMecanico(id) : await this.talleresMecanicosModel.findTalleresMecanicos()
    }

    guardarTallerMecanico = async tallerMecanico => {
        return await this.talleresMecanicosModel.saveTallerMecanico(tallerMecanico)
    }

    actualizarTallerMecanico = async (tallerMecanico,id) => {
        return await this.talleresMecanicosModel.updateTallerMecanico(tallerMecanico,id)
    }

    eliminarTallerMecanico = async id => {
        return await this.talleresMecanicosModel.deleteTallerMecanico(id)
    }
}

export default ApiTalleresMecanicos
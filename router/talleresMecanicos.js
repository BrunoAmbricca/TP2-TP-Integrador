import express from 'express'
import ControladorTalleresMecanicos from '../controller/talleresMecanicos.js'


export class RouterTalleresMecanicos {
    constructor() {
        this.router = express.Router()
        this.controladorTalleresMecanicos = new ControladorTalleresMecanicos()
    }

    start() {
        this.router.get('/:id?', this.controladorTalleresMecanicos.getTalleresMecanicos)
        this.router.post('/', this.controladorTalleresMecanicos.postTallerMecanico)
        this.router.put('/', this.controladorTalleresMecanicos.putTallerMecanico)
        this.router.delete('/', this.controladorTalleresMecanicos.deleteTallerMecanico)
        
        return this.router
    }
}

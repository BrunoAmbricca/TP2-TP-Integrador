class TalleresMecanicosMemDAO {

    constructor() {
        this.talleresMecanicos = [
            { id: '1', nombre: 'MecanicaOeste', telefono: '73910364', email: 'mecanicoOeste@gmail.com', direccion: 'Rivadavia 2000', estaDisponible: true },
            { id: '2', nombre: 'MecanicoAbasto', telefono: '31025385', direccion: 'Corrientes 1000', email: 'mecanicoAbasto@gmail.com', estaDisponible: false },
        ]
    }

    findTallerMecanico = async id => {
        return this.talleresMecanicos.find(tallerMecanico => tallerMecanico.id == id)    
    }

    findTalleresMecanicos = async ()  => {
        try {
            return this.talleresMecanicos
        }
        catch {
            return []
        }
    }

    saveTallerMecanico = async tallerMecanico => {

        const id = parseInt(this.talleresMecanicos[this.talleresMecanicos.length-1].id) + 1
        tallerMecanico.id = String(id)

        this.talleresMecanicos.push(tallerMecanico)

        return {status: 'OK'}    
    }

    updateTallerMecanico = async (tallerMecanico) => { 
        
        const index = this.talleresMecanicos.findIndex(usu => usu.id == tallerMecanico.id)
        this.talleresMecanicos.splice(index, 1, tallerMecanico)

        return tallerMecanico    
    }

    deleteTallerMecanico = async id => {
        const index = this.talleresMecanicos.findIndex(tallerMecanico => tallerMecanico.id == id)

        const tallerMecanico = this.talleresMecanicos.splice(index, 1)[0]
        
        return tallerMecanico    
    }
}

export default TalleresMecanicosMemDAO

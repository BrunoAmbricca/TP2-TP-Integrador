import TalleresMecanicosMemDAO from './talleresMecanicosMem.js'
import TalleresMecanicosMongoDAO from './talleresMecanicosMongoDB.js'

class TalleresMecanicosFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM' :
                console.log(' ***** Persistiendo en Memoria ***** ')
                return new TalleresMecanicosMemDAO()

            case 'MONGO' :
                console.log(' ***** Persistiendo en MongoDB ***** ')
                return new TalleresMecanicosMongoDAO()

            default: 
                console.log(' ***** Persistiendo en default (Memoria) ***** ')
                return new TalleresMecanicosMemDAO()
        }
    }
}

export default TalleresMecanicosFactoryDAO
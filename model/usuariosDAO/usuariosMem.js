class UsuariosMemDAO {

    constructor() {
        this.usuarios = [
            { id: '1', nombre: 'Marta', telefono: '92382674', email: 'marta@gmail.com' },
            { id: '2', nombre: 'Marcelo', telefono: '63982674', email: 'marcelo@gmail.com' },
        ]
    }

    findUsuario = async id => {
        return this.usuarios.find(usuario => usuario.id == id)    
    }

    findUsuarios = async ()  => {
        try {
            return this.usuarios
        }
        catch {
            return []
        }
    }

    saveUsuario = async usuario => {

        const id = parseInt(this.usuarios[this.usuarios.length-1].id) + 1
        usuario.id = String(id)

        this.usuarios.push(usuario)

        return {status: 'OK'}    
    }

    updateUsuario = async (usuario) => { 
        
        const index = this.usuarios.findIndex(usu => usu.id == usuario.id)
        this.usuarios.splice(index, 1, usuario)

        return usuario    
    }

    deleteUsuario = async id => {
        const index = this.usuarios.findIndex(usuario => usuario.id == id)

        const usuario = this.usuarios.splice(index, 1)[0]
        
        return usuario    
    }
}

export default UsuariosMemDAO

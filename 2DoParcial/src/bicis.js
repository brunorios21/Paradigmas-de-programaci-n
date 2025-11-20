class Farolito {
    peso() {
        return 0.5
    }

    carga() {
        return 0
    }

    esLuminoso() {
        return true
    }
}

class Canasto {
    constructor(volumen) {
        this.volumen = volumen
    }

    peso() {
        return this.volumen / 10
    }

    carga() {
        return this.volumen * 2
    }

    esLuminoso() {
        return false
    }
}

class Morral {
    constructor(largo, tieneOjoDeGato) {
        this.largo = largo
        this.tieneOjoDeGato = tieneOjoDeGato
    }

    peso() {
        return 1.2
    }

    carga() {
        return this.largo / 3
    }

    esLuminoso() {
        return this.tieneOjoDeGato
    }
}

class Bicicleta {
    constructor(rodado, largo, marca, accesorios = []) {
        this.rodado = rodado
        this.largo = largo
        this.marca = marca
        this.accesorios = accesorios
    }

    altura() {
        return this.rodado * 2.5 + 15
    }

    velocidadDeCrucero() {
        if (this.largo > 120) {
            return this.rodado + 6
        }
        return this.rodado + 2
    }

    carga() {
        return this.accesorios.reduce((acum, a) => acum + a.carga(), 0)
    }

    peso() {
        const pesoBici = this.rodado / 2
        const pesoAcc = this.accesorios.reduce((acum, a) => acum + a.peso(), 0)
        return pesoBici + pesoAcc
    }

    tieneLuz() {
        return this.accesorios.some(a => a.esLuminoso())
    }

    accesoriosLivianos() {
        return this.accesorios.filter(a => a.peso() < 1).length
    }
}

module.exports = { Bicicleta, Farolito, Canasto, Morral }

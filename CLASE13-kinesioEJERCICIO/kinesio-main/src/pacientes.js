class Paciente {
    constructor(edad, nivelDolor, fortalezaMuscular, rutina=[]){
        this.edad = edad;
        this.nivelDolor = nivelDolor
        this.fortalezaMuscular = fortalezaMuscular
        this.rutina = rutina
    }

    dolor() {
        return this.nivelDolor;
    }
    muscular() {
        return this.fortalezaMuscular;
    }

    getEdad() {
        return this.edad
    }

    disminuirDolor(unValor) {
        this.nivelDolor = Math.max( 0, this.nivelDolor - unValor)
    }

    aumentarFortalezaMuscular(unValor) {
        this.fortalezaMuscular += unValor
    }

    puedeRealizarRutina() {
        return this.rutina.every( aparto => aparto.puedeSerUsadoPor(this))
    }

    realizarRutina() {
        const puedoUsar = this.rutina.filter( aparato => aparato.puedeSerUsadoPor(this))
        puedoUsar.forEach( aparato => aparato.usarsePor(this))
    }
}

module.exports = Paciente
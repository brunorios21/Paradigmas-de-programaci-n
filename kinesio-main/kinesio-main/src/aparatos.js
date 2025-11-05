class Magneto{
    puedeSerUsadoPor(persona){
        return true;
    }

    usarsePor(persona) {
        if(this.puedeSerUsadoPor(persona))
            persona.disminuirDolor( persona.dolor() * 0.1)
    }
}

class Bicicleta {
    puedeSerUsadoPor(persona){
        return persona.getEdad() > 8
    }
    usarsePor(persona) {
        if(this.puedeSerUsadoPor(persona)){
            persona.disminuirDolor(4)
            persona.aumentarFortalezaMuscular(3)
        }
    }
}

class Minitramp {
    puedeSerUsadoPor(persona){
        return persona.dolor() < 20
    }
    usarsePor(persona) {
        if(this.puedeSerUsadoPor(persona))
            persona.aumentarFortalezaMuscular(persona.getEdad() * 0.1)
    }
}

module.exports = { Magneto, Bicicleta, Minitramp }
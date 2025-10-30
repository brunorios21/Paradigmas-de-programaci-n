class Locomotora {
    //Constructor de la clase Locomotora
    constructor (peso, arrastreMaximo, velocidadMaxima) {
        this.peso = peso;
        this.arrastreMaximo = arrastreMaximo;
        this.velocidadMaxima = velocidadMaxima;
    }

    Eseficiente() {
        return this.arrastreMaximo >= (5 * this.peso);
    }
}
module.exports = Locomotora;
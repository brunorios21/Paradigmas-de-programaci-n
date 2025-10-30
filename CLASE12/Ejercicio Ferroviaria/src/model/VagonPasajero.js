const Vagon = require("./Vagon");

class VagonPasajero extends Vagon {
  
  
  constructor(largo, ancho, tieneBanio, estaOrdenado) {
    super();
    this.largo = largo;
    this.ancho = ancho;
    this.tieneBanio = tieneBanio;
    this.estaOrdenado = estaOrdenado;
  }

  cargaMaxima() {
    return this.tieneBanio ? 300 : 800;
  }

  cantidadDePasajeros() {
    let pasajeros = this.ancho <= 3 ? (8 * this.largo) : (10 * this.largo);
    if (!this.estaOrdenado) pasajeros = pasajeros - 15;
    return pasajeros;

  }

  conBanion() {
    return this.tieneBanio
  }

  pesoMaximo() {
        return 2000 + (80 * this.cantidadDePasajeros()) + this.cargaMaxima();
  }

  recibirMantenimiento() {
    this.estaOrdenado = true;
  }

}

module.exports = VagonPasajero;
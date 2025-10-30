const Vagon = require("./Vagon");

class VagonDormitorio extends Vagon {
  
  constructor(compartimentos, camas) {
    super();
    this.compartimentos = compartimentos;
    this.camas = camas;
  }

  cargaMaxima() {
    return 1200;
  }

  cantidadDePasajeros() {
    return this.compartimentos * this.camas;
  }

  conBanion() {
    return true;
  }

  pesoMaximo() {
    return 4000 + (80 * this.cantidadDePasajeros()) + this.cargaMaxima();
  }

  recibirMantenimiento() {
    // no hace nada, los vagones dormitorio no requieren mantenimiento
  }

}

module.exports = VagonDormitorio;
class Tren {
  constructor() {
    this.vagones = [];
    this.locomotoras = [];
  }

  agregarVagon(vagon) {
    this.vagones.push(vagon);
  }

  // Voy a crear los metodos de la sección de Requerimientos.

  // 1. Hasta cuántos pasajeros puede llevar.
  pasajeros() {
    const pasajeros = this.vagones.reduce((acc, v) => {
      acc = acc + v.cantidadDePasajeros();
      return acc;
    }, 0);
    return pasajeros;
  }
 
  // 2. Cuántos vagones populares tiene. Un vagón es popular si puede llevar más de 50 pasajeros.
  cantidadVagonesPopulares() {
    return this.vagones.filter((v) => v.cantidadDePasajeros() > 50).length;
  }

  // 3. Si es una formación carguera, o sea, si todos los vagones pueden transportar
  // al menos 1000 kilos de carga.
  esFormacionCarguera() {
    return this.vagones.every((v) => v.cargaMaxima() >= 1000);
  }

  // 4. Cuál es la dispersión de pesos, que es el resultado de esta cuenta:
  // peso máximo del vagón más pesado - peso máximo del vagón más liviano.
  dispersionPesos() {
    //peso max del vagon mas pesado.
    const maxPesado = this.vagones.reduce((max, v) => {
      //console.log(`p: ${v.pesoMaximo()}`)
      max = max > v.pesoMaximo() ? max : v.pesoMaximo();
      return max;
    }, 0);

    //peso max del vagon mas liviano.
    //Ojo, hago esto porque Math.min necesita argumentos no un array...
    const maxLiviano = Math.min(...this.vagones.map((v) => v.pesoMaximo()));
    return maxPesado - maxLiviano;
  }

  //5. Cuántos baños tiene una formación, que se obtiene como la cantidad de vagones que tienen baños
  // (se supone que cada vagón que tiene baños, tiene uno solo).

  cantidadBanios() {
    return this.vagones.filter((v) => v.conBanion()).length;
  }

  // 6. Hacer mantenimiento de un vagón de pasajeros quiere decir ordenarlo;
  // si no estaba ordenado pasa a estar ordenado, si ya estaba ordenado no cambia nada.
  hacerMantenimiento() {
    this.vagones.forEach((v) => {
      v.recibirMantenimiento();
    });
  }

  // 7. Punto extra.
  // Si está equilbrada en pasajeros, o sea: si considerando sólo los vagones que llevan pasajeros, la diferencia entre el que más lleva y el que menos no supera los 20 pasajeros.
  estaEquilibrada() {
    const umbral = 20;

    const capacidades = this.vagones
      .map((v) => v.cantidadDePasajeros())
      .filter((n) => n > 0); // solo los que realmente llevan pasajeros

    if (capacidades.length <= 1) return true; // con 0 o 1 vagon, la dif es 0

    const max = Math.max(...capacidades);
    const min = Math.min(...capacidades);
    const diferencia = max - min;

    //console.log(`${max}  - ${min}`);

    return diferencia <= umbral; // no supera los 20 
  }

  //1. su velocidad maxima que es el minimo de las velocidades maximas de sus locomotoras
  velocidadMaxima() {
    if (this.locomotoras.length === 0) return null;
    return Math.min(...this.locomotoras.map((l) => l.velocidadMaxima));
  }

  //Si es eficiente; o sea si todas sus locomotoras lo son.
  esEficiente() {
    if (this.locomotoras.length === 0) return null;
    return this.locomotoras.every((l) => l.esEficiente());
  }

  //3. si puede moverse. una formacion puede moverse si la suma del arrastre
  // de locomotoras, es mayor o igual al peso maximo de la formacion.
  // del peso maximo de los vagones
  arrastreTotal() {
    return this.locomotoras.reduce((acc, l) => acc + l.arrastreMaximo, 0);
  }

  pesoMaximoFormacion() {
    const pesoMaximoLoco = this.locomotoras.reduce(
      (acc, l) => acc + l.peso,
      0
    );
    const pesoMaximoVagones = this.vagones.reduce(
      (acc, v) => acc + v.pesoMaximo(),
      0
    );
    return pesoMaximoLoco + pesoMaximoVagones;
  }

  puedeMoverse() {
    return this.arrastreTotal() >= this.pesoMaximoFormacion();
  }

  //4. cuantos kilos de empuje le faltan para poder moverse, que es 0: 
  //Si ya se puede mover, y si no, el resultado
  //de peso maximo - la suma de arrastre de caa locomotora.
  kilosDeEmpujeFaltante() {
    return Math.max(0, this.pesoMaximoFormacion() - this.arrastreTotal());
  }
}

module.exports = Tren;

class Deposito {
    //Constructor de la clase Deposito
    constructor() {
        this.trenes = [];
        this.locomotorasSueltas = [];
    }

    agregarTren(tren) {
        this.trenes.push(tren);
    }

    agregarLocomotoraSueltas(locomotora) {
        this.locomotorasSueltas.push(locomotora);
    }

    vagonesMasPesadosPorFormacion() {
        return this.trenes.map(
            (tren) => {
                return tren.vagones.reduce(
                    (max, v) => v.pesoMaximo() > max.pesoMaximo() ? v : max,
                    tren.vagones[0]
                );
            }
        );
    }

    // Saber si un deosito necesita un conductor experimentado.
    esFormacionCompleja(tren) {
        const unidades = tren.vagones.length + tren.locomotoras.length;
        return unidades > 8 || tren.pesoMaximoFormacion() > 80000;
    }   

    necesitaConductorExperimentado() {
        return this.trenes.some(f => this.esFormacionCompleja(f));
    }

    agregarLocomotorParaqueSeMueva(tren) {
        if (!tren.puedeMoverse() && this.locomotorasSueltas.length) {
            const locomotoraSuelta = this.locomotorasSueltas.shift(); 
            if(locomotoraSuelta.arrastreMaximo() >= locomotoraSuelta.kilosDeEmpujeFaltante()) {
                tren.agregarLocomotora(locomotoraSuelta);
            }
        }
    }
}
module.exports = Deposito;


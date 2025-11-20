const { Bicicleta, Farolito, Canasto, Morral } = require("./bicis")

describe("Bicis del enunciado", () => {

    test("Bici 1", () => {
        const farolito = new Farolito()
        const bici = new Bicicleta(28, 150, "Olmo", [farolito])

        expect(bici.altura()).toBe(85)
        expect(bici.velocidadDeCrucero()).toBe(34)
        expect(bici.carga()).toBe(0)
        expect(bici.peso()).toBe(14.5)
        expect(bici.tieneLuz()).toBe(true)
        expect(bici.accesoriosLivianos()).toBe(1)
    })

    test("Bici 2", () => {
        const farolito = new Farolito()
        const canasto = new Canasto(8)
        const morral = new Morral(21, true)

        const bici = new Bicicleta(26, 110, "Legnano", [farolito, canasto, morral])

        expect(bici.altura()).toBe(80)
        expect(bici.velocidadDeCrucero()).toBe(28)
        expect(bici.peso()).toBe(15.5)
        expect(bici.carga()).toBe(23)
        expect(bici.tieneLuz()).toBe(true)
        expect(bici.accesoriosLivianos()).toBe(2)
    })

    test("Bici 3", () => {
        const morral = new Morral(6, false)
        const bici = new Bicicleta(20, 90, "Legnano", [morral])

        expect(bici.altura()).toBe(65)
        expect(bici.velocidadDeCrucero()).toBe(22)
        expect(bici.carga()).toBe(2)
        expect(bici.peso()).toBe(11.2)
        expect(bici.tieneLuz()).toBe(false)
        expect(bici.accesoriosLivianos()).toBe(0)
    })

})

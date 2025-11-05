const { Magneto, Bicicleta, Minitramp } = require('./aparatos')
const Paciente = require('./pacientes')

describe("Test de Aparatos", ()=>{
    test ("de Magneto puedeSerUsadoPor" , ()=> {
        const leonardo = new Paciente(40, 10, 20)
        const milena =  new Paciente(3, 30, 50)
        const magneto = new Magneto()

        expect(magneto.puedeSerUsadoPor(leonardo)).toBe(true)
        expect(magneto.puedeSerUsadoPor(milena)).toBe(true)
    })

    test ("de Bicicleta puedeSerUsadoPor" , ()=> {
        const leonardo = new Paciente(40, 10, 20)
        const milena =  new Paciente(3, 30, 50)
        const bici = new Bicicleta()

        expect(bici.puedeSerUsadoPor(leonardo)).toBe(true)
        expect(bici.puedeSerUsadoPor(milena)).toBe(false)
    })

    test ("de Minitramp puedeSerUsadoPor" , ()=> {
        const leonardo = new Paciente(40, 10, 20)
        const milena =  new Paciente(3, 30, 50)
        const mini = new Minitramp()

        expect(mini.puedeSerUsadoPor(leonardo)).toBe(true)
        expect(mini.puedeSerUsadoPor(milena)).toBe(false)
    })

    test ("de Magneto usarsePor" , ()=> {
        const leonardo = new Paciente(40, 10, 20)
        const milena =  new Paciente(3, 30, 50)
        const magneto = new Magneto()

        magneto.usarsePor(leonardo)
        magneto.usarsePor(milena)

        expect(leonardo.dolor()).toBe(9)
        expect(leonardo.muscular()).toBe(20)
        expect(milena.dolor()).toBe(27)
        expect(milena.muscular()).toBe(50)
    })

    test ("de Bicicleta usarsePor" , ()=> {
        const leonardo = new Paciente(40, 10, 20)
        const milena =  new Paciente(3, 30, 50)
        const bici = new Bicicleta()

        bici.usarsePor(leonardo)
        bici.usarsePor(milena)

        expect(leonardo.dolor()).toBe(6)
        expect(leonardo.muscular()).toBe(23)
        expect(milena.dolor()).toBe(30)
        expect(milena.muscular()).toBe(50)
    })

    test ("de Minitramp usarsePor" , ()=> {
        const leonardo = new Paciente(40, 10, 20)
        const milena =  new Paciente(3, 30, 50)
        const mini = new Minitramp()

        mini.usarsePor(leonardo)
        mini.usarsePor(milena)

        expect(leonardo.dolor()).toBe(10)
        expect(leonardo.muscular()).toBe(24)
        expect(milena.dolor()).toBe(30)
        expect(milena.muscular()).toBe(50)
    })
})
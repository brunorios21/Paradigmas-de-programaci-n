const series = require("../dataStore/series.json")
 const {seriesDisponibles} = require("../libs/func")


describe("Pruebas de funciones para series...",()=>{
    test ("series disponibles",()=>{
        expect(seriesDisponibles(series)).toHaveLength(2);
    });
})
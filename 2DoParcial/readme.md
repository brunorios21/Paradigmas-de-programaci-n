# Parcial 2 – Bicicletas y Accesorios

Este proyecto contiene la solución al ejercicio de Bicicletas del segundo parcial.  
Se trabajó con clases de JavaScript para representar bicicletas y sus accesorios, y se usó Jest para probar los cálculos pedidos en el enunciado.

---

##  Archivos entregados

### 1. **Bicis.js**
En este archivo están definidas todas las clases del modelo:

- **Bicicleta**  
  Representa una bici con su rodado, largo, marca y una lista de accesorios.  
  Tiene métodos que calculan:
  - `altura()` → fórmula pedida en el enunciado  
  - `velocidadDeCrucero()` → depende del largo  
  - `carga()` → suma de la carga de los accesorios  
  - `peso()` → peso de la bici + accesorios  
  - `tieneLuz()` → si algún accesorio es luminoso  
  - `accesoriosLivianos()` → cuenta accesorios de menos de 1 kg  

- **Farolito**  
  - Pesa 0.5 kg  
  - No suma carga  
  - Es luminoso  

- **Canasto**  
  - Recibe un volumen  
  - Peso = volumen / 10  
  - Carga = volumen * 2  
  - No es luminoso  

- **Morral**  
  - Recibe largo y si tiene ojo de gato  
  - Peso fijo 1.2 kg  
  - Carga = largo / 3  
  - Es luminoso solo si tiene ojo de gato  

---

### 2. **Bicis.test.js**
Archivo con pruebas usando Jest.  
Incluye los **3 ejemplos del enunciado**, verificando:

- altura  
- velocidad de crucero  
- peso  
- carga  
- si tiene luz  
- cantidad de accesorios livianos  

Cada test crea la bici correspondiente y compara los resultados con los valores esperados.

---

## Cómo correr los tests
```bash
npm test

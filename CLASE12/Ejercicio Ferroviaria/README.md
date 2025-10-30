# Ejercicio Ferroviaria

Este proyecto implementa un sistema de gestión ferroviaria en JavaScript, dividido en tres etapas principales.

## Índice
- [Etapa 1 - Vagones](#etapa-1---vagones)
- [Etapa 2 - Locomotoras](#etapa-2---locomotoras)
- [Etapa 3 - Depósitos](#etapa-3---depósitos)

## Etapa 1 - Vagones

### Tipos de Vagones

#### Vagones de Pasajeros
- **Características**:
  - Largo y ancho en metros
  - Presencia de baños
  - Estado de orden
- **Cálculo de Pasajeros**:
  - Ancho ≤ 3m: 8 pasajeros/metro de largo
  - Ancho > 3m: 10 pasajeros/metro de largo
  - Si está desordenado: -15 pasajeros
- **Capacidad de Carga**:
  - Con baños: 300kg
  - Sin baños: 800kg
- **Peso Máximo**: 2000kg + (80kg × pasajeros) + carga máxima

#### Vagones de Carga
- **Características**:
  - Carga máxima ideal
  - Cantidad de maderas sueltas
- **Capacidad de Carga**: Carga máxima ideal - (400kg × maderas sueltas)
- **Restricciones**:
  - No lleva pasajeros
  - Sin baños
- **Peso Máximo**: 1500kg + carga máxima

#### Vagones Dormitorio
- **Características**:
  - Número de compartimientos
  - Camas por compartimiento
- **Capacidad**:
  - Pasajeros: compartimientos × camas
  - Carga: 1200kg
- **Características Fijas**:
  - Incluye baños
- **Peso Máximo**: 4000kg + (80kg × pasajeros) + 1200kg

### Requerimientos de Formación

1.  Capacidad total de pasajeros
2.  Cantidad de vagones populares (>50 pasajeros)
3.  Verificación de formación carguera (todos los vagones ≥1000kg)
4.  Dispersión de pesos (máximo - mínimo)
5.  Cantidad total de baños
6.  Mantenimiento:
   - Vagones de pasajeros: ordenar
   - Vagones de carga: reparar 2 maderas sueltas
   - Vagones dormitorio: sin efecto
7.  Extra: Equilibrio de pasajeros (diferencia ≤20 entre máximo y mínimo)

##  Etapa 2 - Locomotoras

### Características
- Peso propio
- Capacidad de arrastre
- Velocidad máxima
- Eficiencia: puede arrastrar ≥5 veces su peso

### Funcionalidades
1.  Velocidad máxima de formación
2.  Verificación de eficiencia
3.  Capacidad de movimiento
4.  Cálculo de empuje faltante

##  Etapa 3 - Depósitos

### Componentes
- Formaciones armadas
- Locomotoras sueltas

### Funcionalidades
1.  Obtener vagón más pesado de cada formación
2.  Verificar necesidad de conductor experimentado
3.  Agregar locomotoras a formaciones según necesidad

##  Cómo ejecutar el proyecto

1. Asegúrate de tener Node.js instalado
2. Clona el repositorio
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta los tests:
   ```bash
   npm test
   ```
5. Para desarrollo con auto-recarga:
   ```bash
   npm run dev
   ```

##  Tests

El proyecto incluye tests exhaustivos que verifican:
- Comportamiento de vagones individuales
- Funcionamiento de formaciones completas
- Operaciones de mantenimiento
- Gestión de locomotoras
- Funcionalidades de depósitos

##  Recursos Adicionales

Para más información y recursos del proyecto, visita:

[Drive con recursos adicionales](https://drive.google.com/drive/folders/1lE8CC6fTmaQBz23LlYLQl0bpBbkFG_MF?usp=sharing)

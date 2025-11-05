# Centro de Kinesiologia
En un centro de kinesiología hay distintos tratamientos para la cura de lesiones dolorosas y fortalecimiento muscular. Se nos pide armar un modelo que permita estudiar algunos parámetros sobre los pacientes, y controlar el uso de los aparatos.

## 1. Aparatos y pacientes.
De cada paciente del centro de kinesiologia interesa conocer la edad, el nivel de fortaleza muscular y el nivel de dolor.
El nivel de fortaleza y el nivel de dolor son valores que se van modificando a medida que el paciente utiliza aparatos.
El centro tiene distintos tipos de aparatos, en este enunciado incluimos sólo tres. La incorporación de nuevos tipos de aparatos debe ser sencilla, no debería ser necesario modificar código existente sino solamente agregar nuevas definiciones.

Cuando un paciente usa un aparato pasa lo siguiente:

- Magneto: el nivel de dolor disminuye en un 10%. Puede ser usado por cualquier persona.
- Bicicleta: el nivel de dolor disminuye en 4 puntos, mientras que la fortaleza muscular suma 3 puntos. Solo puede ser usado por personas mayores a 8 años.
- Minitramp: El nivel de fortaleza muscular aumenta un 10% de la edad del paciente. Solo puede ser usado por personas cuyo nivel de dolor es inferior a 20.
Requerimientos:

Saber si un paciente puede usar un aparato
- Que un paciente use un aparato.
- Poder consultar el nivel de dolor y el nivel de fortaleza muscular de un paciente, que deben ir cambiando como - resultado del uso de aparatos.


### Tests parte 1
Consideremos las siguientes dos personas.

Leonardo, 40 años de edad, nivel de dolor 10, fortaleza 20.
Milena, 3 años de edad, nivel de dolor 30, fortaleza 50.
Crear un aparato de cada tipo, y verificar que

Leonardo puede usar los tres aparatos creados, mientras que Milena puede usar sólo el magneto.
Después de usar el magneto una vez, el nivel de dolor de Leonardo baja a 9.
Después de usar el magneto una vez, el nivel de dolor de Milena baja a 27.
Después de usar la bicicleta una vez, el nivel de dolor de Leonardo baja a 6, y la fortaleza sube a 23.
Después de usar el minitramp una vez, la fortaleza de Leonardo sube a 24.
Estos tests deben ser independientes.

## 2. Rutinas.
A cada paciente se le asigna una serie de aparatos a ser usados en un orden determinado, cuando acude a al centro a realizar una sesión. A esto lo llamaremos la rutina asignada al cliente.
Una rutina puede incluir que se utilice más de una vez el mismo aparato. Por ejemplo: una bicicleta, un minitramp, la misma bicicleta de nuevo, un magneto.
Cada vez que un paciente concurre al centro, realiza la rutina que tiene asignada.
A efectos de simplificar el programa, consideramos que cada paciente tiene "sus" aparatos asignados, y que cada vez que va al centro, usa los mismos. En el ejemplo, aunque el centro tenga 20 bicicletas, el paciente va a usar siempre la misma.

**Requerimiento:**

- Saber si un paciente puede hacer la rutina asignada, para lo cual hay que verificar que pueda utilizar todos los aparatos asignados al momento de iniciarla.
- Que el paciente realice una sesión completa: debe usar todos los aparatos incluidos en su rutina, en el orden indicado.

### Tests parte 2
Considerar las dos personas definidas en los tests de la parte 1. La rutina de Leonardo es la indicada en el enunciado. Milena usa, primero un magneto, después una bicicleta.

Verificar que:

Leonardo puede hacer la rutina que tiene asignada. Después de hacerla una vez, su nivel de dolor baja a 1.8, y su fortaleza sube a 30.
Milena no puede hacer la rutina que tiene asignada.
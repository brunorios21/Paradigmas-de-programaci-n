const usuarios = require("./datos/usuarios.json");
const roles = require("./datos/roles.json");

// 2. 📊 Escriba una función que reciba por parámetro un número y retorne todos los usuarios cuyo **sueldo sea mayor o igual** a ese valor. _(1.5 puntos)_

const sueldosMayoresA = (unValor) => {
  return usuarios.filter((u) => u.sueldo >= unValor);
};

// 3. 🔐 Escriba una función que no reciba parámetros y retorne un **booleano** que indique si existe al menos un perfil con `esAdmin = true`. _(2 puntos)_
const hayAdmin = () => {
  return roles.some((r) => r.esAdmin);
};
// 4. ➕ Escriba una función que retorne el **total de sueldos de todos los empleados**, utilizando obligatoriamente el método **\`.reduce()\`**. _(2 puntos)_

const totalSuedos = () => {
  return usuarios.reduce((acum, u) => acum + u.sueldo, 0);
};
// 5. 🔗 Escriba una función que retorne la información **combinada de usuario y rol**, con la siguiente estructura: _(2.5 puntos)_

// ```
// [
//     {
//         "nombre": String,
//         "sueldo": Number,
//         "rol": {
//             "descripcion": String,
//             "esAdmin": Boolean
//         }
//     },
//     { ... }
// ]
// ```

const usuariosRoles = () => {
  return usuarios.map((u) => {
    const cab = { nombre: u.nombre, sueldo: u.sueldo };
    const rol = roles.find((r) => r.id === u.rol_id);
    if (rol) {
      return {
        ...cab,
        rol: {
          descripcion: rol.descripcion,
          esAdmin: rol.esAdmin,
        },
      };
    } else {
      return cab;
    }
  });
};
// ---

// ## ⭐ Punto Bonus (Para sacarse 10 )
// Escriba una función que retorne el **sueldo promedio** de todos los empleados. _(+1 punto extra)_

const sueldoPromedio = () => {
  const largo = usuarios.length;
  if (largo === 0) return 0;
  return totalSuedos() / largo;
};

//Pruebas
console.log(`Usuarios con sueldos mayores a: `);
console.log(sueldosMayoresA(1500));
console.log(`----- `);

console.log(`Hay roles admin: `);
console.log(hayAdmin());
console.log(`----- `);

console.log(`Total de suedos `);
console.log(totalSuedos());
console.log(`----- `);

console.log(`Usuarios y roles `);
console.log(usuariosRoles());
console.log(`----- `);

console.log(`Promedio `);
console.log(sueldoPromedio());
console.log(`----- `);

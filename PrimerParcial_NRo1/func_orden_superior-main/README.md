# 📘 UNPAZ - Paradigmas de Programación

## 📅 Parcial

- **Fecha:** 08-Octubre-2025
- **Duración:** 2h 30m
- **Comisiones:** 1 y 2
- **Modalidad:** Presencial
- **Formato:** Lapicera y papel ✍️
- **Docentes:** Leandro Alvarez y Gerardo González Tulián

---

## 🔎 Contexto

El examen consiste en aplicar los **conceptos del paradigma funcional** aprendidos durante la cursada, utilizando un caso práctico con datos en formato **JSON**. El objetivo es demostrar que el estudiante puede aplicar funciones de orden superior, operaciones con arreglos y buenas prácticas en programación con **JavaScript en Node.js**.

---

## 📂 Archivos disponibles

Se cuenta con dos archivos:

### `usuarios.json`

```
[
    {
        "id": Number,
        "nombre": String,
        "sueldo": Number,
        "rol_id": Number
    },
    { ... }
]
```

### `roles.json`

```
[
    {
        "id": Number,
        "descripcion": String,
        "esAdmin": Boolean
    },
    { ... }
]
```

---

## ✅ Requerimientos

1. 🛠️ Describa en **no más de 6 renglones** el proceso para crear un proyecto que ejecute código en Node.js. Incluya paso a paso: comandos, nombre de archivos y configuraciones mínimas necesarias. _(1 punto)_

2. 📊 Escriba una función que reciba por parámetro un número y retorne todos los usuarios cuyo **sueldo sea mayor o igual** a ese valor. _(1.5 puntos)_

3. 🔐 Escriba una función que no reciba parámetros y retorne un **booleano** que indique si existe al menos un perfil con `esAdmin = true`. _(2 puntos)_

4. ➕ Escriba una función que retorne el **total de sueldos de todos los empleados**, utilizando obligatoriamente el método **\`.reduce()\`**. _(2 puntos)_

5. 🔗 Escriba una función que retorne la información **combinada de usuario y rol**, con la siguiente estructura: _(2.5 puntos)_

```
[
    {
        "nombre": String,
        "sueldo": Number,
        "rol": {
            "descripcion": String,
            "esAdmin": Boolean
        }
    },
    { ... }
]
```

---

## ⭐ Punto Bonus (Para sacarse 10 )

Escriba una función que retorne el **sueldo promedio** de todos los empleados. _(+1 punto extra)_

---

## 📊 Ejemplos de Datos

A continuación, se muestran ejemplos de los archivos con datos cargados:

### `usuarios.json`

```json
[
  {
    "id": 1,
    "nombre": "Ana",
    "sueldo": 1200,
    "rol_id": 2
  },
  {
    "id": 2,
    "nombre": "Carlos",
    "sueldo": 2500,
    "rol_id": 1
  },
  {
    "id": 3,
    "nombre": "Lucía",
    "sueldo": 1800,
    "rol_id": 2
  }
]
```

### `roles.json`

```json
[
  {
    "id": 1,
    "descripcion": "Administrador",
    "esAdmin": true
  },
  {
    "id": 2,
    "descripcion": "Empleado",
    "esAdmin": false
  }
]
```

### Salida esperada el punto 5

```json
[
  {
    "nombre": "Ana",
    "sueldo": 1200,
    "rol": {
      "descripcion": "Empleado",
      "esAdmin": false
    }
  },
  {
    "nombre": "Carlos",
    "sueldo": 2500,
    "rol": {
      "descripcion": "Administrador",
      "esAdmin": true
    }
  },
  {
    "nombre": "Lucía",
    "sueldo": 1800,
    "rol": {
      "descripcion": "Empleado",
      "esAdmin": false
    }
  }
]
```

```

```

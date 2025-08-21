# Paradigmas de Programación 1

<p align="center">
  <!-- Badges -->
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Node.js-backend-green?logo=node.js&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Nodemon-tool-red?logo=npm&style=for-the-badge" />
  <img src="https://img.shields.io/badge/VS_Code-editor-blue?logo=visual-studio-code&style=for-the-badge" />
</p>

---

## Bienvenida

Es un placer darles la bienvenida a este espacio de aprendizaje y crecimiento.  
Iniciamos juntos un nuevo camino en **Paradigmas de Programación**, una asignatura clave en su formación como futuros profesionales de la tecnología.  

Aquí exploraremos **herramientas, metodologías y desafíos** que fortalecerán tu **pensamiento lógico**, tu **trabajo en equipo** y tu **creatividad**.

---

## 1️⃣ Herramientas necesarias

| Herramienta          | Descripción | Link de descarga |
|---------------------|------------|-----------------|
| **Visual Studio Code** | Editor de código moderno y extensible | [Descargar](https://code.visualstudio.com/download) |
| **Node.js (LTS)**      | Entorno de ejecución de JavaScript | [Descargar](https://nodejs.org) |
| **Nodemon**           | Herramienta para reinicio automático de apps Node.js | [npm](https://www.npmjs.com/package/nodemon) |

> Comprobar instalaciones:

```bash
node -v
npm -v
2️⃣ Crear un proyecto Node.js
Paso	Comando / Acción	Descripción
1	npm init -y	Inicializa un proyecto con configuración por defecto
2	Crear carpeta src	Carpeta donde se guardará el código fuente
3	Crear archivo index.js	Archivo principal de la app
4	Editar package.json	Agregar scripts para ejecutar la app automáticamente
🛠 Scripts recomendados

Usando Nodemon:

"scripts": {
  "dev": "nodemon ./src/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}


Usando Node nativo con --watch:

"scripts": {
  "dev": "node --watch ./src/index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}


Cada cambio en index.js se ejecutará automáticamente sin necesidad de reiniciar manualmente.

3️⃣ Ejecutar el proyecto
Comando	Descripción
npm run dev	Ejecuta el proyecto usando scripts
npx nodemon ./src/index.js	Ejecuta directamente usando Nodemon
4️⃣ Resumen visual de programación
<p align="center"> <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&style=for-the-badge" /> <img src="https://img.shields.io/badge/Node.js-backend-green?logo=node.js&style=for-the-badge" /> <img src="https://img.shields.io/badge/Nodemon-tool-red?logo=npm&style=for-the-badge" /> <img src="https://img.shields.io/badge/VS_Code-editor-blue?logo=visual-studio-code&style=for-the-badge" /> </p>
5️⃣ Consejos pro

🏃‍♂️ Usa Metodologías Ágiles para organizar tus prácticas y proyectos.

📂 Mantén tu código en repositorios Git, usando commits claros.

🐧 Aprovecha Linux y terminal para optimizar tu flujo de trabajo.

💡 Siempre comenta tu código y aplica buenas prácticas de programación.

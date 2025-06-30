
# 🔍 TP Complementario – Búsqueda de Productos por Nombre

Este proyecto extiende una aplicación CRUD con MongoDB agregando una **funcionalidad de búsqueda de productos por nombre**, permitiendo a los usuarios encontrar productos mediante coincidencias parciales desde el frontend.

---

## 🧠 Descripción de la mejora

Se implementó:

- Un **input de búsqueda en el frontend** que permite buscar productos por nombre.
- Una **ruta nueva en el backend** que recibe el término buscado y devuelve coincidencias desde la base de datos.
- Visualización dinámica de resultados en el frontend.
- Búsqueda **parcial** e **insensible a mayúsculas/minúsculas**.

---

## 🛠️ Tecnologías utilizadas

- **Frontend:** Vite + React
- **Backend:** Node.js + Express
- **Base de datos:** MongoDB con Mongoose
- **Validación:** Zod
- **Autenticación:** JSON Web Token (JWT)
- **Variables de entorno:** dotenv

---

## 🚀 Instrucciones para ejecutar el proyecto

### ejecutar el backend

```bash
cd backend
npm install
npm run dev

Variables necesarias en backend/.env:
PORT=1234
MONGO_URI=mongodb://localhost:27017/api-auth
JWT_SECRET=22diciembre99

### ejecutar el frontend

```bash
cd frontend
npm install
npm run dev

Variables necesarias en frontend/.env:
VITE_BACKEND_URL=http://localhost:3000

🔎 Ejemplo de uso de la búsqueda
Ingresar un texto parcial o completo en el input de búsqueda (por ejemplo: tablet).

El frontend envía una request GET a:

bash
http://localhost:1234/api/search?search=laptop

El backend busca productos con coincidencias usando una expresión regular:

js
title: { $regex: nombre, $options: "i" }

Los productos coincidentes se muestran automáticamente en pantalla.

🗂️ Estructura del proyecto

backend/
├── src/
    ├── config/
    ├── validator/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    └── index.ts
├── .env

frontend/
├── src/
│   ├── assets/
│   ├── components/
    ├── context/
│   ├── router/
│   ├── views/
│   ├── main.jsx
    ├── styles.css


✅ Buenas prácticas aplicadas
Separación de responsabilidades: modelos, rutas y controladores.

Uso de variables de entorno para proteger datos sensibles.

Manejo de errores y status HTTP adecuados.

Validación de datos con Zod.

Seguridad con JWT.

Frontend y backend conectados correctamente.

🧪 Autor
Paula Bottale


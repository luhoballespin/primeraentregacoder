
# 🛒 API de Productos y Carritos - Proyecto Backend

¡Hola! Bienvenido/a a mi proyecto backend utilizando **Node.js** y **Express**. En esta API puse en práctica conceptos clave como rutas, manejo de archivos, y lógica de negocio, simulando una pequeña tienda online.

---

## 📁 Estructura del Proyecto

📦 proyecto/
├── server-express.js # Archivo principal que inicia el servidor
├── routes/
│ ├── products.router.js # Rutas para productos
│ └── carts.router.js # Rutas para carritos
├── managers/
│ ├── ProductManager.js # Lógica de productos
│ └── CartManager.js # Lógica de carritos
├── data/
|__├── products.json # Persistencia de productos
   └── carts.json # Persistencia de carritos 

---

## 🚀 Funcionalidades

### 📦 Productos (`/api/products`)
- `GET /` → Lista todos los productos
- `GET /:pid` → Muestra un producto por ID
- `POST /` → Agrega un nuevo producto (ID autogenerado)
- `PUT /:pid` → Actualiza un producto (excepto el ID)
- `DELETE /:pid` → Elimina un producto por ID

### 🛒 Carritos (`/api/carts`)
- `POST /` → Crea un nuevo carrito vacío
- `GET /:cid` → Muestra los productos de un carrito
- `POST /:cid/product/:pid` → Agrega un producto al carrito (o suma si ya existe)

---

## 💾 Persistencia

Los datos se almacenan en archivos JSON (`products.json` y `carts.json`) utilizando el sistema de archivos de Node.js. Esto permite mantener la información incluso si el servidor se reinicia.

---

## 🧪 Cómo Probar la API

Usé **Postman** para probar todos los endpoints. Ejemplos:

- Crear un producto:  
  `POST /api/products`  
  Cuerpo: JSON del producto (sin `id`)

- Crear un carrito:  
  `POST /api/carts`

- Agregar producto a un carrito:  
  `POST /api/carts/{cid}/product/{pid}`

---

## ✨ Reflexión

Esta tarea fue una experiencia muy enriquecedora. repase sobre:
- 📌 Ruteo y estructura de un backend
- 📂 Manejo de archivos con Node.js
- ⚙️ Middlewares
- 🧠 Organización de la lógica de negocio

Estoy muy contento con el resultado y motivado para seguir aprendiendo y mejorando 💪

---

## 🔗 Autor

**Luciano Ballespin** – [LinkedIn](https://www.linkedin.com/in/lucianoballespin/)  
🚀 Proyecto realizado como parte de mi formación en desarrollo backend.
   

import express from "express";
import productsRouter from "./routes/products.router.js";
import cartsRouter from "./routes/carts.router.js";
// Importamos los routers de productos y carritos
// y los usamos en la aplicación Express
const app = express();
app.use(express.json());
// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(8080, () => {
  console.log("Servidor escuchando en puerto 8080");
});

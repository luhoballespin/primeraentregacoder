import { Router } from "express";
import ProductManager from "../managers/ProductManager.js";

const router = Router();
const productManager = new ProductManager("./data/products.json");

// Listar todos los productos
router.get("/", async (req, res) => {
  const products = await productManager.getProducts();
  res.json(products);
});

// Traer producto por id
router.get("/:pid", async (req, res) => {
  const product = await productManager.getProductById(req.params.pid);
  if (product) res.json(product);
  else res.status(404).json({ error: "Producto no encontrado" });
});

// Agregar producto
router.post("/", async (req, res) => {
  const product = await productManager.addProduct(req.body);
  res.status(201).json(product);
});

// Actualizar producto
router.put("/:pid", async (req, res) => {
  const updated = await productManager.updateProduct(req.params.pid, req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ error: "Producto no encontrado" });
});

// Eliminar producto
router.delete("/:pid", async (req, res) => {
  const deleted = await productManager.deleteProduct(req.params.pid);
  if (deleted) res.json({ message: "Producto eliminado" });
  else res.status(404).json({ error: "Producto no encontrado" });
});

export default router;

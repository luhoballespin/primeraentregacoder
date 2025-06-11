import { Router } from "express";
import CartManager from "../managers/CartManager.js";

const router = Router();
const cartManager = new CartManager("./data/carts.json");

// Crear carrito
router.post("/", async (req, res) => {
  const cart = await cartManager.createCart();
  res.status(201).json(cart);
});

// Listar todos los carritos
router.get("/", async (req, res) => {
  const carts = await cartManager.getCarts();
  res.json(carts);
});

// Listar productos de un carrito
router.get("/:cid", async (req, res) => {
  const cart = await cartManager.getCartById(req.params.cid);
  if (cart) res.json(cart.products);
  else res.status(404).json({ error: "Carrito no encontrado" });
});

// Agregar producto a carrito
router.post("/:cid/product/:pid", async (req, res) => {
  const result = await cartManager.addProductToCart(
    req.params.cid,
    req.params.pid
  );
  if (result) res.json(result);
  else res.status(404).json({ error: "Carrito o producto no encontrado" });
});

export default router;

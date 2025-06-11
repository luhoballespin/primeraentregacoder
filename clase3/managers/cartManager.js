import fs from "fs/promises";

export default class CartManager {
  constructor(path) {
    this.path = path;
  }

  async getCarts() {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async createCart() {
    const carts = await this.getCarts();
    const newId = carts.length ? parseInt(carts[carts.length - 1].id) + 1 : 1;
    const newCart = { id: newId, products: [] };
    carts.push(newCart);
    await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
    return newCart;
  }

  async getCartById(id) {
    const carts = await this.getCarts();
    return carts.find((c) => String(c.id) === String(id));
  }

  async addProductToCart(cid, pid) {
    const carts = await this.getCarts();
    const cart = carts.find((c) => String(c.id) === String(cid));
    if (!cart) return null;
    const prod = cart.products.find((p) => String(p.product) === String(pid));
    if (prod) {
      prod.quantity += 1;
    } else {
      cart.products.push({ product: pid, quantity: 1 });
    }
    await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
    return cart;
  }
}

import fs from "fs/promises";

export default class ProductManager {
  constructor(path) {
    this.path = path;
  }

  async getProducts() {
    try {
      const data = await fs.readFile(this.path, "utf-8");
      return JSON.parse(data);
    } catch {
      return [];
    }
  }

  async getProductById(id) {
    const products = await this.getProducts();
    return products.find((p) => String(p.id) === String(id));
  }

  async addProduct(product) {
    const products = await this.getProducts();
    const newId = products.length
      ? parseInt(products[products.length - 1].id) + 1
      : 1;
    const newProduct = { id: newId, ...product };
    products.push(newProduct);
    await fs.writeFile(this.path, JSON.stringify(products, null, 2));
    return newProduct;
  }

  async updateProduct(id, updates) {
    const products = await this.getProducts();
    const idx = products.findIndex((p) => String(p.id) === String(id));
    if (idx === -1) return null;
    const updated = { ...products[idx], ...updates, id: products[idx].id };
    products[idx] = updated;
    await fs.writeFile(this.path, JSON.stringify(products, null, 2));
    return updated;
  }

  async deleteProduct(id) {
    const products = await this.getProducts();
    const idx = products.findIndex((p) => String(p.id) === String(id));
    if (idx === -1) return null;
    products.splice(idx, 1);
    await fs.writeFile(this.path, JSON.stringify(products, null, 2));
    return true;
  }
}

import * as fs from "fs";
import * as jsonfile from "jsonfile";

class Producto {
  id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ListaDeProductos {
  nombreDeLista: string;
  lista: Producto[] = [];
  constructor(nombreDeLista: string) {
    this.nombreDeLista = nombreDeLista;
    const productosJson = fs
      .readFileSync(__dirname + "/productos.json")
      .toString();

    const productosJsonParse = JSON.parse(productosJson);

    productosJsonParse.forEach((item) => {
      this.lista.push(item);
    });
  }
  getAll() {
    return this.lista;
  }
  getProductById(id: number): Producto {
    return this.lista.find((item) => item.id == id);
  }
  addProduct(producto: Producto) {
    this.lista.push(producto);
  }
  save() {
    jsonfile.writeFileSync("./productos.json", this.lista);
  }
}

export { Producto, ListaDeProductos };

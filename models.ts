import * as fs from "fs";
import * as jsonfile from "jsonfile";

class Objeto {
  id: number;
  name: string;
  price: number;
  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ListaDeObjetos {
  nombreDeLista: string;
  lista: Objeto[] = [];
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
  getProductById(id: number): Objeto {
    return this.lista.find((item) => item.id == id);
  }
  addProduct(producto: Objeto) {
    this.lista.push(producto);
  }
  save() {
    jsonfile.writeFileSync("./productos.json", this.lista);
  }
}

export { Objeto, ListaDeObjetos };

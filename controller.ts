import { ListaDeObjetos } from "./models";

export class ControllerOption {
  action: "get" | "save";
  params: any;
}

class Controller {
  productos: ListaDeObjetos;
  constructor() {
    this.productos = new ListaDeObjetos("Lista");
    this.productos.load();
  }
  processOptions(options: ControllerOption) {
    if (options.action == "get" && options.params.id) {
      return this.productos.getProductById(options.params.id);
    } else if (options.action == "get") {
      return this.productos.getAll();
    } else if (options.action == "save" && options.params) {
      this.productos.addProduct(options.params);
      this.productos.save();
    }
  }
}
export { Controller };

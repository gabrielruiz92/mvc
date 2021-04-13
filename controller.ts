import { ListaDeProductos } from "./models";

export class ProductsControllerOption {
  action: "get" | "save";
  params: any;
}

class ProductsController {
  productos: ListaDeProductos;
  constructor() {
    this.productos = new ListaDeProductos("Lista");
  }
  processOptions(options: ProductsControllerOption) {
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
export { ProductsController };

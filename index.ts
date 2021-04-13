import * as minimist from "minimist";
import { ProductsController, ProductsControllerOption } from "./controller";

function parsearArgv(argv): ProductsControllerOption {
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}
function main() {
  const controller = new ProductsController();
  const input = parsearArgv(process.argv.slice(2));
  const resultado = controller.processOptions(input);
  console.log(resultado);
}
main();

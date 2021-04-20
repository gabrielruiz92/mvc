import * as minimist from "minimist";
import { Controller, ControllerOption } from "./controller";

function parsearArgv(argv): ControllerOption {
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}
function main() {
  const controller = new Controller();
  controller.promesa.then(() => {
    const input = parsearArgv(process.argv.slice(2));
    const resultado = controller.processOptions(input);
    console.log(resultado);
  });
}
main();

import { App } from "./app";

/**********Inicializacion del Server********************** */
async function main() {
  const app = new App(3000);
  await app.listen();
}

main();
/********************************************** */

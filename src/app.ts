/**EN ESTE ARCHIVO SE ESPECIFICA TODA LA CONFIGURACION DEL SERVIDOR */

import express, { Application } from "express";
import morgan from "morgan";

/*****Importacion de las rutas ****************/
import indexRoutes from "./routes/index.routes";
import postRoutes from "./routes/post.routes";
/*************************** */
export class App {
  //Atributo de la clase
  private app: Application;
  //Constructos para iniciarlizarlo
  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.middleware();
    this.routes();
  }
  //Configuracion para el puerto del servidor
  settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  middleware() {
    this.app.use(morgan("dev"));
    // this.app.use(express.urlencoded({ extended: false }));//Recibir datos de formulario
    this.app.use(express.json());
  }

  //Aqui se definen las rutas de la pagina web
  routes() {
    this.app.use(indexRoutes);
    this.app.use("/posts", postRoutes);
  }
  //Metodo Listen para que el servidor escuche las instrucciones
  //Indicar que va a tomar algo de tiempo de ejecucion
  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port: ", this.app.get("port"));
  }
}

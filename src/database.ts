import { createPool } from "mysql2/promise";

/**FUNCION PARA PODER CONECTARSE A LA BDD MYSQL Y PODER HACER CONSULTAS */
export async function connect() {
  const connection = await createPool({
    host: "localhost",
    user: "root",
    // password: "123456789",
    database: "node_mysql_ts",
    connectionLimit: 10,
  });
  return connection;
}
/********************************************** */

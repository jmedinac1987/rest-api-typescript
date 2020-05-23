import app from "./app";
import { startConnection } from "./database";

async function main() {
  await startConnection()
    .then(() => {
      app.listen(app.get("port"));
      console.log("Servidor iniciado en puerto...", app.get("port"));
    })
    .catch(() => console.error("Error en la conexión a db o servidor..."));
}

main();

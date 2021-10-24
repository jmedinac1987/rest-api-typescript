"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database");
async function main() {
    await database_1.startConnection()
        .then(() => {
        app_1.default.listen(app_1.default.get("port"));
        console.log("Servidor iniciado en puerto...", app_1.default.get("port"));
    })
        .catch(() => console.error("Error en la conexión a db o servidor..."));
}
main();

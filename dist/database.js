"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startConnection = void 0;
const mongoose_1 = require("mongoose");
async function startConnection() {
    await mongoose_1.connect("mongodb://localhost/images-db", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    });
    console.log("Base de datos iniciada...");
}
exports.startConnection = startConnection;

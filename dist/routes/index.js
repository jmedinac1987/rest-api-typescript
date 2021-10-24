"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Image_controller_1 = __importDefault(require("../controllers/Image.controller"));
const router = express_1.Router();
router.get("/images", Image_controller_1.default.getImages);
router.get("/images/:id", Image_controller_1.default.getImage);
router.post("/images", Image_controller_1.default.createImage);
router.delete("/images/:id", Image_controller_1.default.deleteImage);
router.put("/images/:id", Image_controller_1.default.updateImage);
//TODO: esta ruta comentareada se activa para cuando la app este corriendo en un servidor, a menera de pruebas se deja comentareada 
//router.post("/images", multer.single("image"), ImageController.createImage2);
exports.default = router;

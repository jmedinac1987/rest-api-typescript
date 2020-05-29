import { Router } from "express";
import ImageController from "../controllers/Image.controller";
import multer from "../libs/multer";

const router = Router();

router.get("/images", ImageController.getImages);
router.get("/images/:id", ImageController.getImage);
router.post("/images", ImageController.createImage);
router.delete("/images/:id", ImageController.deleteImage);
router.put("/images/:id", ImageController.updateImage);
//TODO: esta ruta comentareada se activa para cuando la app este corriendo en un servidor, a menera de pruebas se deja comentareada 
//router.post("/images", multer.single("image"), ImageController.createImage2);

export default router;

import { Router } from "express";
import ImageController from "../controllers/Image.controller";
import multer from "../libs/multer";

const router = Router();

router.get("/images", ImageController.getImages);
router.get("/images/:id", ImageController.getImage);
router.post("/images", multer.single("image"), ImageController.createImage);

export default router;

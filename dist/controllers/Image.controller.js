"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Image_1 = __importDefault(require("../models/Image"));
async function getImage(req, res) {
    try {
        const singleImage = await Image_1.default.findOne({ _id: req.params.id });
        if (!singleImage)
            return res.status(404).json({ message: "imagen no encontrada..." });
        return res.status(201).json(singleImage);
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
async function getImages(req, res) {
    try {
        const images = await Image_1.default.find();
        return res.status(201).json(images);
    }
    catch (error) {
        return res.status(500).json({
            message: "oops!! a ocurrido un error durante el proceso, intentelo más tarde",
        });
    }
}
async function createImage(req, res) {
    try {
        const { title, description, url } = req.body;
        const newImage = {
            title: title,
            description: description,
            imagePath: url,
        };
        const image = new Image_1.default(newImage);
        await image.save();
        return res.status(201).json({ message: "Imagen almacenada con éxito!!!" });
    }
    catch (error) {
        return res.status(500).json({
            message: "oops!! a ocurrido un error durante el proceso, la información no fue almacenada",
        });
    }
}
async function deleteImage(req, res) {
    try {
        const singleImage = await Image_1.default.findOneAndDelete({ _id: req.params.id });
        if (!singleImage)
            return res.status(404).json({ message: "imagen no encontrada..." });
        return res.status(201).json({ message: "Imagen eliminada con exito..." });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
async function updateImage(req, res) {
    try {
        const { title, description, url } = req.body;
        const updateImage = {
            title: title != null ? title : "",
            description: description != null ? description : "",
            imagePath: url != null ? title : "",
        };
        const singleImage = await Image_1.default.findOneAndUpdate({ _id: req.params.id }, updateImage);
        if (!singleImage)
            return res.status(404).json({ message: "imagen no encontrada..." });
        return res.status(201).json({ message: "Imagen actualizada con exito..." });
    }
    catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
}
/*async function createImage2(req: Request, res: Response): Promise<Response> {
  try {
    const { title, description } = req.body;

    const newImage = {
      title: title,
      description: description,
      imagePath: req.file.path
    };

    const image = new Image(newImage);
    await image.save();

    return res.status(201).json({ message: "Imagen almacenada con éxito!!!" });
  } catch (error) {
    return res.status(500).json({
      message:
        "oops!! a ocurrido un error durante el proceso, la información no fue almacenada"
    });
  }
}*/
/*function getImage(req: Request, res: Response): Response {
    return res.status(201).json({ message: "Listado de imagenes..." });
  } //: Response denota que va a devolver una promesa de Response poreso se pone return antes de res.*/
exports.default = {
    createImage,
    getImages,
    getImage,
    deleteImage,
    updateImage,
};

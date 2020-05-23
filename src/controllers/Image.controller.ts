import { Request, Response } from "express";
import Image from "../models/Image";

async function getImage(req: Request, res: Response): Promise<Response> {
  try {
    const singleImage = await Image.findOne({ _id: req.params.id });
    if (!singleImage)
      return res.status(404).json({ message: "imagen no encontrada..." });

    return res.status(201).json(singleImage);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}

async function getImages(req: Request, res: Response): Promise<Response> {
  try {
    const images = await Image.find();
    return res.status(201).json(images);
  } catch (error) {
    return res.status(500).json({
      message:
        "oops!! a ocurrido un error durante el proceso, intentelo más tarde"
    });
  }
}

async function createImage(req: Request, res: Response): Promise<Response> {
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
}

/*function getImage(req: Request, res: Response): Response {
    return res.status(201).json({ message: "Listado de imagenes..." });
  } //: Response denota que va a devolver una promesa de Response poreso se pone return antes de res.*/

export default {
  createImage,
  getImages,
  getImage
};

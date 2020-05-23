import multer from "multer";
import { v4 as uuidv4  } from "uuid";//para crear un id para la imagen 
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, uuidv4()  + path.extname(file.originalname));
  }
}); //configuración para almacenar la imagen en una ruta y la imagen sera renombrada con un código más la extensión original del archivo de entrada

export default multer({ storage });

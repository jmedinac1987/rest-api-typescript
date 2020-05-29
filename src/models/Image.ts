import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    title: {type: String, required: true },//String con s mayúscula porque es el schema de mongoose
    description: String,
    imagePath: String
});

interface interfaceImage extends Document {
    title: string;//string con s minúscula porque estamos trabajando con typescript
    description: string;
    imagePath: string;
}


export default model<interfaceImage>("Image", schema);
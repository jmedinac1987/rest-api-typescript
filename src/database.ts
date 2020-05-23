import { connect } from "mongoose";

export async function startConnection() {
  await connect("mongodb://localhost/images-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  });

  console.log("Base de datos iniciada...");
}

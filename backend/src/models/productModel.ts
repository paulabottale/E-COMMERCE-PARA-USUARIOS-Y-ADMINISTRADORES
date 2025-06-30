import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, default: 0 },
  category: { type: String, default: "Sin categoria", enum: ["Audio", "Computacion", "Pantallas", "Moviles", "Tablets", "Perifericos", "Fotografia"] }
}, {
  versionKey: false
})

const Product = model("Product", productSchema)

export { Product }
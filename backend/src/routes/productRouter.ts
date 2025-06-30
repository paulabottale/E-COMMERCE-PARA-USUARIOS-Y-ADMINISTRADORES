import { Router } from "express"
import { createProduct, deleteProduct, getAllProducts, updateProduct, searchProduct } from "../controllers/productControllers"
import { authMiddleware } from "../middleware/authMiddleware"

const productRouter = Router()

productRouter.get("/", getAllProducts)
productRouter.get("/search", searchProduct)
productRouter.post("/", authMiddleware, createProduct)
productRouter.delete("/:id", authMiddleware, deleteProduct)
productRouter.patch("/:id", authMiddleware, updateProduct)

export { productRouter }
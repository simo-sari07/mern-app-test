import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 })
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST create new product
router.post("/", async (req, res) => {
  try {
    const { title, price, image } = req.body

    const product = new Product({
      title,
      price,
      image,
    })

    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// GET single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// PUT update product
router.put("/:id", async (req, res) => {
  try {
    const { title, price, image } = req.body
    
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { title, price, image },
      { new: true, runValidators: true }
    )
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    
    res.json(product)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }
    
    res.json({ message: "Product deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
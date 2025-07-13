"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CreateProduct from "./components/CreateProduct"
import React from "react"

function App() {
  const [products, setProducts] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(true)

  const API_URL = "https://mern-app-test-woy0.onrender.com/api"

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/products`)
      const data = await response.json()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching products:", error)
      setLoading(false)
    }
  }

  const handleProductCreated = (newProduct) => {
    setProducts([newProduct, ...products])
    setShowCreateForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCreateClick={() => setShowCreateForm(true)}
        showCreateForm={showCreateForm}
        onBackClick={() => setShowCreateForm(false)}
      />

      <main className="container mx-auto px-4 py-8">
        {showCreateForm ? (
          <CreateProduct onProductCreated={handleProductCreated} apiUrl={API_URL} />
        ) : (
          <ProductList products={products} loading={loading} />
        )}
      </main>
    </div>
  )
}

export default App

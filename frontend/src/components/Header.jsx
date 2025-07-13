"use client"
import React from "react"

const Header = ({ onCreateClick, showCreateForm, onBackClick }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Products Store</h1>

          {showCreateForm ? (
            <button
              onClick={onBackClick}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              ← Back to Products
            </button>
          ) : (
            <button
              onClick={onCreateClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
            >
              + Add Product
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

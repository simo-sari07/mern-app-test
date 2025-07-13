import React from "react"

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image"
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{product.title}</h3>

        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">${product.price}</span>

          <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

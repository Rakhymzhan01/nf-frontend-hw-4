// components/ProductCard.jsx
import React from 'react';
import Link from 'next/link';

function ProductCard({ product }) {
    return (
        <div className="border rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/products/${product.id}`} className="block">
                <div className="relative">
                    <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-48 object-cover"/>
                </div>
            </Link>
            <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold truncate">
                    <Link href={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </h3>
                <p className="text-gray-700 mb-2">{product.description}</p>
                <span className="text-lg font-bold">${product.price}</span>
            </div>
        </div>
    );
}

export default ProductCard;

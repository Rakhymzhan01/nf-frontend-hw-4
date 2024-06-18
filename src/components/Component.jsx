import React from 'react';
import Link from 'next/link';
import { Button } from "./Button";  // Assuming you have a custom Button component

// This is a functional component named "ProductCard" to display product details
function ProductCard({ product }) {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm overflow-hidden">
            <Link href={`/products/${product.id}`} className="block" prefetch={false}>
                <img
                    src={product.image || "/placeholder.svg"} // Use product image or a placeholder
                    alt={product.title}
                    className="w-full h-60 object-cover"
                />
            </Link>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/products/${product.id}`} className="hover:underline" prefetch={false}>
                        {product.title}
                    </Link>
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-gray-50">${product.price}</span>
                    <Button variant="outline" size="sm">Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;

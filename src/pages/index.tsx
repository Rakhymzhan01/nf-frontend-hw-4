// pages/index.jsx
import React from 'react';
import { useQuery } from 'react-query';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/productsService';
import '../app/globals.css'
const Home = () => {
    const { data: products, isLoading, error } = useQuery('products', fetchProducts);

    if (isLoading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (error) return <div className="text-red-500 text-center mt-4">An error occurred</div>;

    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product:any) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;

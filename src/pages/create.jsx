import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createProduct } from '../services/productsService';
import '../app/globals.css'
import Header from '../components/Header';

export default function CreateProductPage() {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, reset } = useForm();
    const mutation = useMutation(createProduct, {
        onSuccess: () => {
            setMessage('Product created successfully!');
            reset(); // Reset form fields after successful submission
        },
        onError: (error) => {
            setMessage(`Failed to create product: ${error.message}`);
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-lg mx-auto bg-gray-50 p-8 border border-gray-200 rounded-lg shadow-sm">
                <h1 className="text-xl font-semibold mb-6 text-gray-800">Add New Product</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Name</label>
                        <input {...register('name')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Product Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Description</label>
                        <textarea {...register('description')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Product Description" rows="3"></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Price</label>
                        <input {...register('price')} type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="0.00" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Image</label>
                        <input {...register('image')} type="file" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Add Product
                    </button>
                </form>
                {message && <div className={`mt-4 text-center text-sm font-medium ${mutation.isSuccess ? 'text-green-500' : 'text-red-500'}`}>{message}</div>}
            </div>
        </div>
    );
}

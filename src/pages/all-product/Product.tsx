import React from 'react';

export type TCar = {
    _id: string;
    brand: string;
    model: string;
    year: number;
    image?: string;
    price: number;
    category: "Sedan" | "SUV" | "Truck" | "Coupe" | "Convertible";
    description: string;
    quantity: number;
    inStock: boolean;
    createdAt: string;
};

const CarDetail: React.FC<{ car: TCar }> = ({ car }) => {
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {car.image && <img className="w-full h-64 object-cover rounded-lg mb-6" src={car.image} alt={`${car.brand} ${car.model}`} />}
            <div className="mb-4">
                <h1 className="text-3xl font-bold mb-2">{car.brand} {car.model}</h1>
                <p className="text-gray-700 text-base">{car.description}</p>
            </div>
            <div className="mb-4">
                <span className="block text-gray-700 font-semibold">Category: {car.category}</span>
                <span className="block text-gray-700 font-semibold">Year: {car.year}</span>
                <span className="block text-gray-700 font-semibold">Price: ${car.price}</span>
                <span className={`block text-sm font-semibold ${car.inStock ? 'text-green-700' : 'text-red-700'}`}>
                    {car.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </div>
            <div className="mb-4">
                <span className="block text-gray-700">Quantity: {car.quantity}</span>
                <span className="block text-gray-700">Added on: {new Date(car.createdAt).toLocaleDateString()}</span>
            </div>
        </div>
    );
};

export default CarDetail;

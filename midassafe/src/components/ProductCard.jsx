import React from "react";

const ProductCard = ({ image, title, subtitle, isNew }) => {
    return (
        <div className= "bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center relative transform transition duration-300 hover:scale-105 hover:shadow-lg">
            {isNew && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    NEW
                </div>
            )}
            <img
                src={image}
                alt={title}
                className="w-36 h-36 object-contain mb-4 transition duration-300 hover:opacity-50"
            />
            <p className="text-gray-500 text-sm">{subtitle}</p>
            <h3 className="text-gray-800 font-semibold  hover:text-red-500 text-lg">{title}</h3>
        </div>
    );
};

export default ProductCard;
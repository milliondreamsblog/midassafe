import React from "react";

const ProductCard = ({ image, title, subtitle, isNew }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center text-center relative">
            {isNew && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    NEW
                </div>
            )}
            <img
                src={image}
                alt={title}
                className="w-36 h-36 object-contain mb-4"
            />
            <p className="text-gray-500 text-sm">{subtitle}</p>
            <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
        </div>
    );
};

export default ProductCard;
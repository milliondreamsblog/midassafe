import React from "react";
import ProductCard from "./ProductCard";

const ProductRow = ({ products }) => {
    return (
        <section className="px-6 lg:px-20 py-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                    Choice of new Outdoor items
                </h2>
                <a
                    href="#"
                    className="text-orange-600 hover:underline text-sm font-medium"
                >
                    All articles
                </a>
            </div>
            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        subtitle={product.subtitle}
                        isNew={product.isNew}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductRow;
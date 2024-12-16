import React from 'react'
import ProductRow from './ProductRow';
import products from '../../public/productData';

function ProductPage() {

    return (
        <div className="min-h-screen bg-gray-50">
            <ProductRow products={products} />
        </div>
    );
}

export default ProductPage
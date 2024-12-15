import React from 'react'
import ProductRow from './ProductRow';

function ProductPage() {

    const products = [
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59460/image-thumb__59460__productCard/Outdoor_3785_360_vorne.f0b24e1a.webp",
            title: "Strike jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59333/image-thumb__59333__productCard/Outdoor_3090_360_vorne.af7c3fe4.webp",
            title: "Match hooded jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59475/image-thumb__59475__productCard/Outdoor_3790_360_vorne.a5621d43.webp",
            title: "Plane jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59355/image-thumb__59355__productCard/Outdoor_3087_360_vorne.8656cb14.webp",
            title: "Choice women’s jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59460/image-thumb__59460__productCard/Outdoor_3785_360_vorne.f0b24e1a.webp",
            title: "Strike jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59333/image-thumb__59333__productCard/Outdoor_3090_360_vorne.af7c3fe4.webp",
            title: "Match hooded jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59475/image-thumb__59475__productCard/Outdoor_3790_360_vorne.a5621d43.webp",
            title: "Plane jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
        {
            image: "https://cdn.planam.de/thumbnail/Bilder/Sortimente/Outdoor/Produktansichten/59355/image-thumb__59355__productCard/Outdoor_3087_360_vorne.8656cb14.webp",
            title: "Choice women’s jacket",
            subtitle: "Outdoor",
            isNew: true,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <ProductRow products={products} />
        </div>
    );
}

export default ProductPage
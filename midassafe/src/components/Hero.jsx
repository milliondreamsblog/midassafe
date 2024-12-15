import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { BiWorld } from 'react-icons/bi';
import HeroSecond from "./HeroSecond";

const Hero = () => {
    return (
        <>
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.planam.de/thumbnail/Bilder/Emotionsbilder%20allgemein/Collagen/Warnschutz/56973/image-thumb__56973__Default/PLANAM_Collage_Warnschutz_11.69e22ee4.webp')" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative top-16 sm:top-28 z-10 flex flex-col justify-center h-full px-6 lg:px-20 text-white">
                    <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        Workwear Redefined: Style & Function
                    </h1>
                    <p className="max-w-xl mb-6 text-lg leading-relaxed">
                        We pride ourselves on delivering exceptional value, with top-notch materials and designs available at competitive prices. To sweeten the deal, enjoy 40% off on selected items by signing up for our newsletter! Experience workwear that works as hard as you do, without compromising on style
                    </p>
                    <div className="relative sm:flex gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 w-auto h-12 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
                            More about Midassafe
                        </button>

                        {/* Icons */}
                        <div className="flex space-x-6">
                            <span className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-orange-800 cursor-pointer transition duration-300">
                                <FaCartShopping />
                            </span>
                            <span className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-orange-800 cursor-pointer transition duration-300">
                                <IoMdContact />
                            </span>
                            <span className="w-12 h-12 flex items-center justify-center border rounded-full hover:bg-orange-800 cursor-pointer transition duration-300">
                                <BiWorld />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <HeroSecond />
        </>
    );
};

export default Hero;

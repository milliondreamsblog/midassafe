import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProducts = () => {
        setIsProductsOpen(!isProductsOpen);
    };

    return (
        <header className="flex justify-between items-center w-full px-6 py-4 shadow-md fixed top-0 z-50 bg-white">

            {/* Logo Section */}
            <div className="text-2xl font-bold text-orange-500">
                <NavLink to="/">Midassafe</NavLink>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button
                className="text-2xl md:hidden text-gray-600"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navigation Links */}
            <nav
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } md:flex flex-col md:flex-row md:space-x-8 text-lg absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
            >
                <NavLink to="/" className="nav-link" activeClassName="active-nav-link" onClick={toggleProducts}>Products</NavLink>
                <NavLink to="/events" className="nav-link" activeClassName="active-nav-link">Events</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active-nav-link">About Us</NavLink>
                <NavLink to="/faq" className="nav-link" activeClassName="active-nav-link">FAQ</NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="active-nav-link">Contact Us</NavLink>
            </nav>

            {/* Products Dropdown Section */}
            {isProductsOpen && (
                <div className="absolute top-16 right-0 w-full bg-gray-100 shadow-lg p-4 flex">
                    <div className="w-full p-4">
                        <h2 className="text-lg font-bold text-orange-500">Our Products</h2>
                        <p className="text-gray-600 text-sm">
                            Explore our wide range of safety apparel and accessories designed to meet your needs with the highest standards of quality.
                        </p>
                    </div>
                    <div className="w-2/3 grid grid-cols-2 gap-4">
                        <NavLink to="/products/trouser" className="dropdown-link">Trouser</NavLink>
                        <NavLink to="/products/jackets" className="dropdown-link">Jackets</NavLink>
                        <NavLink to="/products/vest" className="dropdown-link">Vest</NavLink>
                        <NavLink to="/products/bib-trouser" className="dropdown-link">Bib Trouser</NavLink>
                        <NavLink to="/products/coverall" className="dropdown-link">Coverall</NavLink>
                        <NavLink to="/products/freezer-wear" className="dropdown-link">Freezer Wear</NavLink>
                        <NavLink to="/products/flame-retardant" className="dropdown-link">Flame Retardant</NavLink>
                        <NavLink to="/products/hi-visibility" className="dropdown-link">Hi Visibility</NavLink>
                        <NavLink to="/products/corporate-clothing" className="dropdown-link">Corporate Clothing</NavLink>
                        <NavLink to="/products/corporate-accessories" className="dropdown-link">Corporate Accessories</NavLink>
                    </div>
                </div>
            )}

            {/* Icons */}
            <div className="hidden md:flex space-x-6 text-xl text-gray-600">
                <BiWorld className="icon" />
                <FaQuestionCircle className="icon" />
            </div>
        </header>
    );
}

export default Navbar;
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-orange-400 text-black-300 py-8">
            <div className="container mx-auto px-6 lg:px-20">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-4">About Us</h3>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, repellendus libero. Autem cumque quisquam optio dolorem ea eligendi necessitatibus, quo natus placeat culpa illo cupiditate quos et dolor voluptas aliquam at velit. Autem, omnis blanditiis quae vitae possimus tempora impedit nesciunt in aliquid, dolores libero ipsum at atque reiciendis? Inventore.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <NavLink
                                    to="/"
                                    className="hover:text-white transition duration-300"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className="hover:text-white transition duration-300"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className="hover:text-white transition duration-300"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="hover:text-white transition duration-300"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                to="/facebook"
                                className="hover:text-white transition duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebookF size={20} />
                            </Link>
                            <Link
                                to="/twitter"
                                className="hover:text-white transition duration-300"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </Link>
                            <Link
                                to="/instagram"
                                className="hover:text-white transition duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={20} />
                            </Link>
                            <Link
                                to="/linkedin"
                                className="hover:text-white transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Made with ❤️ by Akshat Darshi & Team</p>
                    <ul className="flex space-x-4 mt-4 md:mt-0">
                        <li>
                            <NavLink
                                to="/privacy-policy"
                                className="hover:text-white transition duration-300"
                            >
                                Privacy Policy
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/terms-of-service"
                                className="hover:text-white transition duration-300"
                            >
                                Terms of Service
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
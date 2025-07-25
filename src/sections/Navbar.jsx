import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSelector from '../components/Languages';
import { Box, Button } from '@mui/material';


const navItems = [
    {
        label: "Wallet",
        submenu: [{ name: "Mobile App", url: "/mobile-download" }, { name: "Browser Extension", url: "/web-download" }],
    },
    {
        label: "Features",
        submenu: [{ name: "Earning", url: "https://vrcnetwork.app/earn" }, { name: "Launchpad", url: "" }, { name: "Swap", url: "" }],
    },
    {
        label: "Get Support",
        url: "/support"

    },


];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSubmenu = (label) => {
        setOpenMobileSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };


    return (
        <nav className="w-full bg-white shadow-sm  py-6 px-4 md:px-8 relative z-10">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} alt="Epay Logo" className="w-10 h-10 object-contain" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-black">
                    {navItems.map((item) => (
                        <div key={item.label} className="relative group">
                            <Link to={item.url} className="cursor-pointer flex items-center gap-1">
                                {item.label} {item.submenu && <ChevronDown className="w-4 h-4" />}
                            </Link>
                            {/* Submenu (on hover) */}
                            <div className="absolute left-0  py-2 hidden group-hover:block bg-white shadow-lg rounded z-50">
                                {item.submenu && item.submenu.map((subItem) => (
                                    <a
                                        key={subItem}
                                        href={subItem.url}

                                        className="block px-5 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                                    >
                                        {subItem.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <Box display="flex" gap={2} justifyContent="center" alignItems="center">
                    <Button
                        variant="outlined"

                        sx={{
                            border: '1px solid',
                            borderColor: '#1976d2',
                            borderRadius: '30px',
                            px: 3,
                            py: 1,
                            color: "#1976d2",
                            fontWeight: 'bold',
                            textTransform: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                                color: '#fff',
                            },
                        }}
                    >
                        Download
                    </Button>
                    <LanguageSelector />
                </Box>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <img src={logo} alt="Epay Logo" className="w-50 h-5" />
                    <button onClick={toggleMenu}>
                        <X size={24} />
                    </button>
                </div>

                <div className="flex flex-col px-6 py-4 gap-4 text-black font-medium text-base">
                    {navItems.map((item) => (
                        <div key={item.label}>
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSubmenu(item.label)}
                            >
                                {item.label}
                                <ChevronDown
                                    className={`w-4 h-4 transition-transform ${openMobileSubmenus[item.label] ? "rotate-180" : ""
                                        }`}
                                />
                            </div>
                            {openMobileSubmenus[item.label] && (
                                <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                                    {item.submenu.map((sub) => (
                                        <a key={sub} href="#" className="hover:text-black">
                                            {sub}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40"
                    onClick={toggleMenu}
                />
            )}
        </nav>
    );
};

export default Navbar;

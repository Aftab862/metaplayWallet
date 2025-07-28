import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
    Box,
    Button,
    ClickAwayListener,
} from '@mui/material';
import logo from '../assets/logo.png';
import LanguageSelector from '../components/Languages';

const navItems = [
    {
        id: 1,
        label: "Wallet",
        submenu: [
            { id: 11, name: "Mobile App", url: "/mobile-download" },
            { id: 12, name: "Browser Extension", url: "/web-download" },
        ],
    },
    {
        id: 2,
        label: "Features",
        submenu: [
            { id: 21, name: "Earning", url: "https://vrcnetwork.app/earn" },
            { id: 22, name: "Launchpad", url: "#" },
            { id: 23, name: "Swap", url: "#" },
        ],
    },
    {
        id: 3,
        label: "Get Support",
        url: "/support",
    },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
    const [openDropdownId, setOpenDropdownId] = useState(null);

    const handleClickAway = () => {
        setMobileMenuOpen(false);
        setOpenDropdownId(null);
    };

    const navigate = useNavigate()

    const toggleMobileSubmenu = (id) => {
        setOpenMobileSubmenus((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <ClickAwayListener onClickAway={() => handleClickAway}>
            <nav className="w-full bg-white shadow-sm py-4 px-4 md:px-8 sticky top-0 z-50">
                <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Trust Wallet Logo" className="w-40 object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 text-sm md:text-base font-medium text-black">
                        {navItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative group"
                                onMouseEnter={() => setOpenDropdownId(item.id)}
                                onMouseLeave={() => setOpenDropdownId(null)}
                            >
                                {item.url ? (
                                    <Link to={item.url} className="flex items-center gap-1 cursor-pointer">
                                        {item.label}
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-1 cursor-pointer">
                                        {item.label}
                                        {item.submenu && <ChevronDown className="w-4 h-4" />}
                                    </div>
                                )}

                                {/* Submenu Dropdown */}
                                {item.submenu && openDropdownId === item.id && (
                                    <div className="absolute left-0  py-2 bg-white shadow-lg rounded z-50 min-w-[150px]">
                                        {item.submenu.map((subItem) => (
                                            <a
                                                key={subItem.id}
                                                href={subItem.url}
                                                className="block px-5 py-2 hover:bg-gray-100 text-sm whitespace-nowrap"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <Box display="flex" gap={2} alignItems="center">
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '30px',
                                px: 3,
                                py: 1,
                                color: "#fff",
                                textTransform: 'none',
                                borderColor: "#1976d2",
                                '&:hover': {
                                    backgroundColor: '#1976d2',

                                },
                            }}
                            onClick={() => navigate("/download")}
                        >
                            Download
                        </Button>
                        <LanguageSelector />
                    </Box>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="p-4 flex justify-between items-center border-b">
                        <img src={logo} alt="Logo" className="h-5" />
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col px-6 py-4 gap-4 text-black font-medium text-base">
                        {navItems.map((item) => (
                            <div key={item.id}>
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleMobileSubmenu(item.id)}
                                >
                                    <span>{item.label}</span>
                                    {item.submenu && (
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform ${openMobileSubmenus[item.id] ? 'rotate-180' : ''
                                                }`}
                                        />
                                    )}
                                </div>
                                {item.submenu && openMobileSubmenus[item.id] && (
                                    <div className="pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-600">
                                        {item.submenu.map((sub) => (
                                            <a key={sub.id} href={sub.url} className="hover:text-black">
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Overlay */}
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 z-40"
                        onClick={() => handleClickAway}
                    />
                )}
            </nav>
        </ClickAwayListener>
    );
};

export default Navbar;

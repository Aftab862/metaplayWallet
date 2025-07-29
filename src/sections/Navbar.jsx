import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { keyframes } from '@emotion/react';
import {
    Box,
    Button,
    ClickAwayListener,
} from '@mui/material';
import logo from '../assets/logo.png';
import LanguageSelector from '../components/Languages';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 #1976d2;
  }
  100% {
    box-shadow: 0 0 0 18px rgba(255, 255, 255, 0);
  }
`;

const navItems = [
    {
        id: 0,
        label: "Home",
        url: "/",

    },

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
            { id: 21, name: "staking", url: "/staking" },
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
// https://vrcnetwork.app/earn
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
                    <button
                        onClick={() => {
                            window.location.href = '/';
                        }}
                        className="flex items-center gap-2"
                    >
                        <img src={logo} alt="Trust Wallet Logo" className="w-40 object-contain" />
                    </button>


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
                                    <Link to={item.url} className="flex items-center gap-1 cursor-pointer hover:text-indigo-600"

                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-600">
                                        {item.label}
                                        {item.submenu && openDropdownId === item.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </div>
                                )}


                                {item.submenu && openDropdownId === item.id && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 py-3 bg-white shadow-xl rounded-lg z-50 min-w-[150px] border border-gray-200">
                                        {item.submenu.map((subItem) => (
                                            <a
                                                key={subItem.id}
                                                href={subItem.url}
                                                className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 text-sm transition-all duration-200 whitespace-nowrap"
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
                    <Box className='hidden md:flex gap-4 '>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '30px',
                                px: 3,
                                py: 1,
                                backgroundColor: '#1976d2',
                                color: '#fff',
                                animation: `${pulse} 2s infinite 3s cubic-bezier(0.25, 0, 0, 1)`,
                                transition: '0.5s',
                                textTransform: "none",

                            }}
                            onClick={() => navigate('/download')}
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
